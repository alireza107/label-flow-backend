import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectsService {
  private projects: Project[] = [
    {
      id: 1,
      name: 'First Project',
      categories: ['tech'],
      labels: ['label1'],
    },
  ];

  findAll() {
    return this.projects;
  }

  findOne(id: string) {
    const project = this.projects.find((project) => project.id === +id);
    if (!project) {
      throw new HttpException(
        `Project with id ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    return project;
  }

  create(createProjectDto: any) {
    this.projects.push(createProjectDto);
  }

  update(id: string, updateProjectDto: any) {
    const existingProject = this.findOne(id);
    if (existingProject) {
      console.log(updateProjectDto);
      // update the project
    }
  }

  remove(id: string) {
    this.projects = this.projects.filter((project) => project.id !== +id);
  }
}
