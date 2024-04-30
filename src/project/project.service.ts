import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Label } from './entities/label.entity';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
    @InjectRepository(Label)
    private labelRepository: Repository<Label>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  findAll(paginationQuery: PaginationQueryDto) {
    const { limit, offset } = paginationQuery;
    return this.projectRepository.find({
      relations: ['labels', 'createdBy', 'members'],
      skip: offset,
      take: limit,
    });
  }

  async findOne(id: string) {
    const project = await this.projectRepository.findOne({
      where: { id: +id },
      relations: ['labels', 'createdBy', 'members'],
    });

    if (!project) {
      throw new HttpException(
        `Project with id ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    return project;
  }

  async create(createProjectDto: CreateProjectDto) {
    const labels =
      createProjectDto.labels &&
      (await Promise.all(
        createProjectDto.labels.map((label) => this.preloadLabelByName(label)),
      ));

    const project = this.projectRepository.create({
      ...createProjectDto,
      labels,
    });

    this.projectRepository.save(project);
  }

  async update(id: string, updateProjectDto: UpdateProjectDto) {
    const labels =
      updateProjectDto.labels &&
      (await Promise.all(
        updateProjectDto.labels.map((label) => this.preloadLabelByName(label)),
      ));

    const project = await this.projectRepository.preload({
      id: +id,
      ...updateProjectDto,
      labels,
    });

    if (!project) {
      throw new HttpException(
        `Project with id ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    this.projectRepository.save(project);
  }

  async remove(id: string) {
    const project = await this.findOne(id);
    this.projectRepository.remove(project);
  }

  private async preloadLabelByName(name: string): Promise<Label> {
    const existingLabel = await this.labelRepository.findOne({
      where: { name },
    });
    if (existingLabel) {
      return existingLabel;
    }
    return this.labelRepository.create({ name });
  }

  async joinProject(projectId: string, userId: number): Promise<void> {
    const project = await this.findOne(projectId);
    const user = await this.userRepository.findOne({ where: { id: userId } });

    if (!project || !user) {
      throw new NotFoundException('User or project not found');
    }

    project.members.push(user);
    await this.projectRepository.save(project);
  }
}
