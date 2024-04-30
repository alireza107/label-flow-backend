import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Label } from './label.entity';
import { User } from 'src/user/entities/user.entity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => Label, (label) => label.project, { cascade: true })
  labels: Label[];

  @Column('json', { nullable: true })
  categories: string[];

  @ManyToMany(() => User, (user) => user.projects)
  users: User[];
}
