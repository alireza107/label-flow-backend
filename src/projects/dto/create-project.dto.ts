import { IsString } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsString({ each: true })
  readonly categories: string[];

  @IsString({ each: true })
  readonly labels: string[];
}
