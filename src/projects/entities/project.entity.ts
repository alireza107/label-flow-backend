import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Label } from './label.entity';
import { User } from 'src/user/user.entity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Label, (label) => label.project, { cascade: true })
  labels: Label[];

  @Column('json', { nullable: true })
  categories: string[];

  @ManyToMany(() => User)
  users: User[];
}
