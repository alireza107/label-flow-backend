import { IsNumber, IsString } from 'class-validator';
import { User } from 'src/user/entities/user.entity';

export class CreateProjectDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsString({ each: true })
  readonly categories: string[];

  @IsString({ each: true })
  readonly labels: string[];

  @IsNumber()
  readonly createdBy: User;
}
