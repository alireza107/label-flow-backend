import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Label } from './label.entity';

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
}
