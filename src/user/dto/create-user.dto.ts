import { IsString, IsIn, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly firstName: string;

  @IsString()
  readonly lastName: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  @IsIn(['admin', 'user'])
  readonly role: string;
}
