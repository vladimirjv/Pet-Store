import Faker from 'faker';
import { define } from 'typeorm-seeding';
import { Med as MedEntity } from '../../api/med/med.entity';
import { PharmaceuticalFormTypes } from '../../api/med/constants/PharmaceuticalFormTypes';
import { AdministrationRoutes } from '../../api/med/constants/AdministrationRoutes';
import { drugs as Drugs } from '../../../static/medicine/drugs.json';
import { pharmaceuticalForms } from '../../../static/medicine/pharmaceuticalForms.json';
import { symptoms } from '../../../static/medicine/symptoms.json';
import { MeasureUnits } from '../../api/med/constants/MeasureUnits';
import { ContainerTypes } from '../../api/med/constants/ContainerTypes';

interface SettingsMedFactory {
    PharmaceuticalFormType?: PharmaceuticalFormTypes;
    AdministrationRoute?: AdministrationRoutes;
}
const SettingsMedFactoryDefaults: SettingsMedFactory = {
    PharmaceuticalFormType: null,
    AdministrationRoute: null,
};
define(MedEntity, (faker: typeof Faker, settings: SettingsMedFactory = SettingsMedFactoryDefaults) => {
    const medName = Drugs[faker.random.number(Drugs.length - 1)];
    // const commercialName = pharmaceuticalForms[faker.random.number(pharmaceuticalForms.length - 1)];
    const commercialName = medName;
    const description = faker.lorem.sentence(faker.random.number({ min: 100, max: 150 }));

    let measure: number;
    let measureUnit: MeasureUnits;
    const measureUnitNumber = faker.random.number({ min: 0, max: 2 });
    switch (measureUnitNumber) {
        case 0:
            measureUnit = MeasureUnits.UNIT;
            measure = faker.random.number({ min: 1, max: 5 });
            break;
        case 1:
            measureUnit = MeasureUnits.ML;
            measure = faker.random.number({ min: 50, max: 400 });
            break;
        case 2:
            measureUnit = MeasureUnits.MGR;
            measure = faker.random.number({ min: 50, max: 750 });
            break;
    }

    const containerType = randomEnum(ContainerTypes);
    const warnings = faker.lorem.sentence(faker.random.number({ min: 100, max: 150 }));
    const sideEffects = symptoms[faker.random.number(symptoms.length - 1)];

    const classification = faker.lorem.word();
    const pharmaceuticalFormType = randomEnum(PharmaceuticalFormTypes);
    const administrationRoute = randomEnum(AdministrationRoutes);
    const pharmaceuticalForm = pharmaceuticalForms[faker.random.number(pharmaceuticalForms.length - 1)];

    const med = new MedEntity();
    med.medName = medName;
    med.commercialName = commercialName;
    med.description = description;
    med.measure = measure;
    med.measureUnit = measureUnit;
    med.containerType = containerType;
    med.warnings = warnings;
    med.sideEffects = sideEffects;
    med.classification = classification;
    med.pharmaceuticalFormType = pharmaceuticalFormType;
    med.administrationRoute = administrationRoute;
    med.pharmaceuticalForm = pharmaceuticalForm;
    return med;
});

function randomEnum(enumeration) {
    const values = Object.keys(enumeration);
    const enumKey = values[Math.floor(Math.random() * values.length)];
    return enumeration[enumKey];
}
