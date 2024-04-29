import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsModule } from './projects/projects.module';
import { dbDataSource } from './data.source';

@Module({
  imports: [TypeOrmModule.forRoot(dbDataSource), ProjectsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
