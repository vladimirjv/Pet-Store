import { IsNotEmpty, IsString, IsEmail } from 'class-validator';
import { IsPassword } from '../../../decorators/validators.decorator';

export class RegisterUserDto {
    @IsNotEmpty()
    @IsString()
    firstName: string;

    @IsNotEmpty()
    @IsString()
    lastName: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsPassword()
    password: string;

    @IsNotEmpty()
    @IsString()
    phone: string;
}
