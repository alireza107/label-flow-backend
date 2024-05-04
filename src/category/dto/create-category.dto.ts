import { IsBoolean, IsString } from 'class-validator';
import { Project } from 'src/project/entities/project.entity';

export class CreateCategoryDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsBoolean()
  readonly isActive: boolean;

  @IsString({ each: true })
  readonly projects: Project[];
}
