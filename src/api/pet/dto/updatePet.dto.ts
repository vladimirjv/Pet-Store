import {
    IsString,
    IsPositive,
    IsOptional,
    IsInt,
} from 'class-validator';

export class UpdatePetDto {
    @IsString({ message: 'name must be a string' })
    @IsOptional()
    name: string;

    @IsInt({ message: 'age must be an integer' })
    @IsPositive({ message: 'age must be a positive number' })
    @IsOptional()
    age: number;
}
