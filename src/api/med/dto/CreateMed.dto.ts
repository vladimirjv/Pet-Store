import { IsString, IsNotEmpty, MaxLength, IsOptional, IsDecimal, IsEnum, IsNumber, Max } from 'class-validator';
import { MeasureUnits } from '../constants/MeasureUnits';
import { EnumToString } from '~/helpers/functions/EnumToString';
import { ContainerTypes } from '../constants/ContainerTypes';
import { PharmaceuticalFormTypes } from '../constants/PharmaceuticalFormTypes';
import { AdministrationRoutes } from '../constants/AdministrationRoutes';
import { IMed } from '../Interfaces/IMed';

export class CreateMedDto implements IMed {
    // Description
    @IsString({ message: 'Med Name must be string' })
    @MaxLength(250)
    @IsNotEmpty({ message: 'Med Name is required' })
    medName: string;

    @IsString({ message: 'Commercial Name must be string' })
    @MaxLength(250, { message: 'Commercial Name max length is 250' })
    @IsNotEmpty({ message: 'Commercial Name is required' })
    commercialName: string;

    @IsString({ message: 'Description must be a string' })
    @MaxLength(500, { message: 'Description max length is 500' })
    @IsNotEmpty({ message: 'Description is required' })
    description: string;

    @IsNumber({ maxDecimalPlaces: 2 }, { message: 'Set Measure quantity to 2 decimals' })
    @IsNotEmpty({ message: 'Measure quantity required' })
    measure: number;

    @IsEnum(MeasureUnits, { message: `MeasureUnits must be on of this ${EnumToString(MeasureUnits)}` })
    @IsNotEmpty({ message: 'MeasureUnits is required' })
    measureUnit: MeasureUnits;

    @IsEnum(ContainerTypes, { message: `Container type must be on of this ${EnumToString(ContainerTypes)}` })
    @IsNotEmpty({ message: 'Container type is required' })
    containerType: ContainerTypes;

    // // warnings
    @IsString({ message: 'warnings must be an string' })
    @MaxLength(500, { message: 'warnings mas length is 500' })
    @IsOptional()
    warnings: string;

    @IsString({ message: 'side effects must be an string' })
    @MaxLength(500, { message: 'side effects max length is 500' })
    @IsOptional()
    sideEffects: string;

    // // Classification
    @IsString({ message: 'classification must be a string' })
    @IsNotEmpty({ message: 'classification is required' })
    classification: string;

    @IsEnum(
        PharmaceuticalFormTypes,
        { message: `Pharmaceutical form type must be on of this ${EnumToString(PharmaceuticalFormTypes)}` },
    )
    @IsNotEmpty({ message: 'Pharmaceutical form type is required' })
    pharmaceuticalFormType: PharmaceuticalFormTypes;

    @IsEnum(
        AdministrationRoutes,
        { message: `Administration Route must be on of this ${EnumToString(AdministrationRoutes)}` },
    )
    @IsNotEmpty({ message: 'Administration Route is required' })
    administrationRoute: AdministrationRoutes;

    // @Column({ type: 'varchar', length: 150, nullable: false })
    @IsString({ message: 'Pharmaceutical form must be a string' })
    @MaxLength(150, { message: 'Pharmaceutical form max length is 150' })
    @IsNotEmpty({ message: 'Pharmaceutical form is required' })
    pharmaceuticalForm: string;
}
