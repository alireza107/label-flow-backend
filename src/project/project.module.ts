import { Module } from '@nestjs/common';
import { ProjectsController } from './project.controller';
import { ProjectsService } from './project.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Label } from './entities/label.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Project, Label])],
  controllers: [ProjectsController],
  providers: [ProjectsService],
})
export class ProjectModule {}
