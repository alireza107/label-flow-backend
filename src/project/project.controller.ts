import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ProjectsService } from './project.service';
import { Project } from './entities/project.entity';
import { UpdateProjectDto } from './dto/update-project.dto';
import { CreateProjectDto } from './dto/create-project.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';

@Controller('project')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  async findAll(
    @Query() paginationQuery: PaginationQueryDto,
  ): Promise<Project[]> {
    return await this.projectsService.findAll(paginationQuery);
  }

  @Get(':id')
  findOne(@Param() params): Promise<Project> {
    // return params.id;
    return this.projectsService.findOne(params.id);
  }

  @Post()
  create(@Body() createProjectDto: CreateProjectDto): Promise<void> {
    // return body;
    return this.projectsService.create(createProjectDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProjectDto: UpdateProjectDto,
  ): Promise<void> {
    // return `This action updates project ${id} and ${body}`;
    return this.projectsService.update(id, updateProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    // return `This action removes project ${id}`;
    return this.projectsService.remove(id);
  }
}
