import { IsString, IsIn } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly firstName: string;

  @IsString()
  readonly lastName: string;

  @IsString()
  readonly email: string;

  @IsString()
  @IsIn(['admin', 'user'])
  readonly role: string;
}
