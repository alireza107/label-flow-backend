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

  @ManyToOne(() => User, (user) => user.createdProjects)
  createdBy: User;

  @ManyToMany(() => User, (user) => user.participatingProjects)
  @JoinTable()
  members: User[];
}
