import { MeasureUnits } from '../constants/MeasureUnits';
import { ContainerTypes } from '../constants/ContainerTypes';
import { PharmaceuticalFormTypes } from '../constants/PharmaceuticalFormTypes';
import { AdministrationRoutes } from '../constants/AdministrationRoutes';

export interface IMed {
    // Description
    medName: string;
    commercialName: string;
    description: string;
    measure: number;
    measureUnit: MeasureUnits;
    containerType: ContainerTypes;
    warnings: string;
    sideEffects: string;

    // Classification
    classification: string;
    pharmaceuticalFormType: PharmaceuticalFormTypes;
    administrationRoute: AdministrationRoutes;
    pharmaceuticalForm: string;
}
