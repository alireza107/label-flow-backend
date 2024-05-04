import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Label } from './label.entity';
import { User } from 'src/user/entities/user.entity';
import { Category } from 'src/category/entities/category.entity';

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

  @ManyToMany(() => Category, (category) => category.projects)
  @JoinTable()
  categories: Category[];

  @ManyToOne(() => User, (user) => user.createdProjects)
  createdBy: User;

  @ManyToMany(() => User, (user) => user.participatingProjects)
  @JoinTable()
  members: User[];
}
