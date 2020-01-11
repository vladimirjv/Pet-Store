import { PharmaceuticalFormTypes } from './constants/PharmaceuticalFormTypes';
import { AdministrationRoutes } from './constants/AdministrationRoutes';

export class Med {
    // Description
    medName: string;
    commercialName: string;
    description: string;
    measure: number;
    measureUnit: string;
    containerType: string;

    // warnings
    warnings: string;
    sideEffects: string;

    // Classification
    classification: string;
    pharmaceuticalFormType: PharmaceuticalFormTypes;
    administrationRoute: AdministrationRoutes;
    pharmaceuticalForm: string;
}
