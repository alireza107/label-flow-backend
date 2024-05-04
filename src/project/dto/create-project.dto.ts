import { IsArray, IsNumber, IsString } from 'class-validator';
import { Category } from 'src/category/entities/category.entity';
import { User } from 'src/user/entities/user.entity';

export class CreateProjectDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsArray()
  readonly categories: Category[];

  @IsString({ each: true })
  readonly labels: string[];

  @IsNumber()
  readonly createdBy: User;
}
