import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectModule } from './project/project.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'postgres',
      autoLoadEntities: true,
      // make it disable in production
      synchronize: true,
    }),
    ProjectModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
