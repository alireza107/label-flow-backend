import { IsBoolean, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsBoolean()
  readonly isActive: boolean;
}
