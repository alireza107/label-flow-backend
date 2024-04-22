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
  findAll(@Query() paginationQuery): Project[] {
    const { limit, offset } = paginationQuery;
    // return `This action returns all projects. Limit: ${limit}, offset: ${offset}`;
    return this.projectsService.findAll();
  }

  @Get(':id')
  findOne(@Param() params): Project {
    // return params.id;
    return this.projectsService.findOne(params.id);
  }

  @Post()
  create(@Body() createProjectDto: CreateProjectDto): void {
    // return body;
    return this.projectsService.create(createProjectDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProjectDto: UpdateProjectDto,
  ): void {
    // return `This action updates project ${id} and ${body}`;
    return this.projectsService.update(id, updateProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): void {
    // return `This action removes project ${id}`;
    return this.projectsService.remove(id);
  }
}
