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
import { ProjectsService } from './projects.service';
import { Project } from './entities/project.entity';
import { UpdateProjectDto } from './dto/update-project.dto';
import { CreateProjectDto } from './dto/create-project.dto';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  async findAll(@Query() paginationQuery): Promise<Project[]> {
    const { limit, offset } = paginationQuery;
    console.log(limit, offset);
    // return `This action returns all projects. Limit: ${limit}, offset: ${offset}`;
    return await this.projectsService.findAll();
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
