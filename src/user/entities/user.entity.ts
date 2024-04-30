import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from './role.entity';
import { Project } from 'src/project/entities/project.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @ManyToMany(() => Project, (project) => project.users)
  projects: Project[];

  @ManyToMany(() => Role)
  @JoinTable()
  roles: Role[];
}
