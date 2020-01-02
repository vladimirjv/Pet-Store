import {
    IsString,
    IsNotEmpty,
    IsPositive,
    IsOptional,
    IsInt,
} from 'class-validator';

export class CreatePetDto {
    @IsString({ message: 'name must be a string' })
    @IsNotEmpty({ message: 'name is required' })
    name: string;

    @IsInt({ message: 'age must be an integer' })
    @IsNotEmpty({ message: 'age is required' })
    @IsPositive({ message: 'age must be a positive number' })
    age: number;

    @IsString()
    @IsOptional()
    userId?: string;
}
