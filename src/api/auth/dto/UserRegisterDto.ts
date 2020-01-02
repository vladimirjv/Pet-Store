import {
    IsString,
    IsEmail,
    MinLength,
    IsNotEmpty,
    IsPhoneNumber,
    IsOptional,
} from 'class-validator';

export class UserRegisterDto {
    @IsString({message: 'Invalid firstName'})
    @IsNotEmpty({message: 'firstName is required'})
    readonly firstName: string;

    @IsString({message: 'Invalid lastName'})
    @IsNotEmpty({message: 'lastName is required'})
    readonly lastName: string;

    @IsString({message: 'Invalid Email'})
    @IsEmail()
    @IsNotEmpty({message: 'email is required'})
    readonly email: string;

    @IsString({message: 'password must be an string'})
    @MinLength(6, {message: 'Min length is 6'})
    @IsNotEmpty({message: 'password is required'})
    readonly password: string;

    @IsString()
    @IsOptional()
    readonly phone: string;
}
