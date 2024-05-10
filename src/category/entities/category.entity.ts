import { Project } from 'src/project/entities/project.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  isActive: boolean;

  @ManyToMany(() => Project, (project) => project.categories)
  projects: Project[];
}
