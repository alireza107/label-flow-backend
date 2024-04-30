import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectModule } from './project/project.module';
import { UserModule } from './user/user.module';
import { dbDataSource } from './data.source';

@Module({
  imports: [TypeOrmModule.forRoot(dbDataSource), ProjectModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
