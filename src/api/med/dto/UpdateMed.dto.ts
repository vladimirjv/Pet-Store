import {
    IsString,
    MaxLength,
    IsOptional,
    IsEnum,
    IsNumber,
    Max,
} from 'class-validator';
import { MeasureUnits } from '../constants/MeasureUnits';
import { EnumToString } from '~/helpers/functions/EnumToString';
import { ContainerTypes } from '../constants/ContainerTypes';
import { PharmaceuticalFormTypes } from '../constants/PharmaceuticalFormTypes';
import { AdministrationRoutes } from '../constants/AdministrationRoutes';
import { IMed } from '../Interfaces/IMed';

export class UpdateMedDto implements Partial<IMed> {
    // Description
    @IsString({ message: 'Med Name must be string' })
    @MaxLength(250)
    @IsOptional()
    medName: string;

    @IsString({ message: 'Commercial Name must be string' })
    @MaxLength(250, { message: 'Commercial Name max length is 250' })
    @IsOptional()
    commercialName: string;

    @IsString({ message: 'Description must be a string' })
    @MaxLength(500, { message: 'Description max length is 500' })
    @IsOptional()
    description: string;

    @IsNumber({ maxDecimalPlaces: 2 }, { message: 'Set Measure quantity to 2 decimals' })
    @IsOptional()
    measure: number;

    @IsEnum(MeasureUnits, { message: `MeasureUnits must be on of this ${EnumToString(MeasureUnits)}` })
    @IsOptional()
    measureUnit: MeasureUnits;

    @IsEnum(ContainerTypes, { message: `Container type must be on of this ${EnumToString(ContainerTypes)}` })
    @IsOptional()
    containerType: ContainerTypes;

    // warnings
    @IsString({ message: 'warnings must be an string' })
    @MaxLength(500, { message: 'warnings mas length is 500' })
    @IsOptional()
    warnings: string;

    @IsString({ message: 'side effects must be an string' })
    @MaxLength(500, { message: 'side effects max length is 500' })
    @IsOptional()
    sideEffects: string;

    // Classification
    @IsString({ message: 'classification must be a string' })
    @IsOptional()
    classification: string;

    @IsEnum(
        PharmaceuticalFormTypes,
        { message: `Pharmaceutical form type must be on of this ${EnumToString(PharmaceuticalFormTypes)}` },
    )
    @IsOptional()
    pharmaceuticalFormType: PharmaceuticalFormTypes;

    @IsEnum(
        AdministrationRoutes,
        { message: `Administration Route must be on of this ${EnumToString(AdministrationRoutes)}` },
    )
    @IsOptional()
    administrationRoute: AdministrationRoutes;

    @IsString({ message: 'Pharmaceutical form must be a string' })
    @MaxLength(150, { message: 'Pharmaceutical form max length is 150' })
    @IsOptional()
    pharmaceuticalForm: string;
}
