import { Module } from '@nestjs/common';
import { ProjectsController } from './project.controller';
import { ProjectsService } from './project.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Label } from './entities/label.entity';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Project, Label, User])],
  controllers: [ProjectsController],
  providers: [ProjectsService],
})
export class ProjectModule {}
