import { Project } from 'src/project/entities/project.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  isActive: boolean;

  @ManyToMany(() => Project, (project) => project.categories)
  @JoinTable()
  projects: Project[];
}
