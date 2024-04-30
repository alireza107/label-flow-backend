import { DataSource, DataSourceOptions } from 'typeorm';

export const dbDataSource: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'postgres',
  synchronize: true,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  migrationsTableName: 'migrations',
};

const dataSource = new DataSource(dbDataSource);

export default dataSource;
