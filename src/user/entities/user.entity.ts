import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Project } from 'src/project/entities/project.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  // FIXME: unique don't work
  @Column({ unique: true })
  email: string;

  @Column()
  role: string;

  @OneToMany(() => Project, (project) => project.createdBy)
  createdProjects: Project[];

  @ManyToMany(() => Project, (project) => project.members)
  participatingProjects: Project[];
}
