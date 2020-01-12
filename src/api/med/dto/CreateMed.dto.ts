import { IsString, IsNotEmpty, MaxLength, IsOptional, IsDecimal, IsEnum } from 'class-validator';
import { MeasureUnits } from '../constants/MeasureUnits';

export class CreateMedDto {
    // Description
    @IsString({ message: 'Med Name must be string' })
    @MaxLength(250)
    @IsNotEmpty({ message: 'Med Name is required' })
    medName: string;

    @IsString({ message: 'Commercial Name must be string' })
    @MaxLength(250, { message: 'Commercial Name max length is 250' })
    @IsNotEmpty({ message: 'Commercial Name is required' })
    commercialName: string;

    @IsString()
    @MaxLength(500)
    @IsOptional()
    description: string;

    @IsDecimal({ decimal_digits: '2' })
    @IsNotEmpty()
    measure: number = 0.0;

    @IsEnum(MeasureUnits)
    @IsNotEmpty()
    measureUnit: MeasureUnits;

    // @Column({ type: 'enum', enum: ContainerTypes, nullable: false })
    // containerType: ContainerTypes;

    // // warnings
    // @Column('text', { default: '' })
    // warnings: string;

    // @Column('text', { default: '' })
    // sideEffects: string;

    // // Classification
    // @Column('varchar', { default: '', nullable: false })
    // classification: string;

    // @Column({ type: 'enum', enum: PharmaceuticalFormTypes, nullable: false })
    // pharmaceuticalFormType: PharmaceuticalFormTypes;

    // @Column({ type: 'enum', enum: AdministrationRoutes, nullable: false })
    // administrationRoute: AdministrationRoutes;

    // @Column({ type: 'varchar', length: 150, nullable: false })
    // pharmaceuticalForm: string;
}
