import Faker from 'faker';
import { define } from 'typeorm-seeding';
// import { UserEntity } from '../../api/user/user.entity';
import { Med as MedEntity } from '../../api/med/med.entity';
import { PharmaceuticalFormTypes } from '../../api/med/constants/PharmaceuticalFormTypes';
import { AdministrationRoutes } from '../../api/med/constants/AdministrationRoutes';
import DrugsJson from '../../../static/medicine/drugs.json';
const drugs = (DrugsJson as { drugs: string[] }).drugs;

interface SettingsMedFactory {
    PharmaceuticalFormType?: PharmaceuticalFormTypes;
    AdministrationRoute?: AdministrationRoutes;
}
const SettingsMedFactoryDefaults: SettingsMedFactory = {
    PharmaceuticalFormType: null,
    AdministrationRoute: null,
};
define(MedEntity, (faker: typeof Faker, settings: SettingsMedFactory = SettingsMedFactoryDefaults) => {
    const gender = faker.random.number(1);
    const firstName = faker.name.firstName(gender);
    const lastName = faker.name.lastName(gender);
    const email = faker.internet.email(firstName, lastName);
    const password = faker.internet.password(7);
    const phone = faker.phone.phoneNumber();

    const user = new MedEntity();
    // user.firstName = firstName;
    // user.lastName = lastName;
    // user.email = email;
    // user.password = password;
    // user.phone = phone;
    // user.role = settings.role;
    return user;
});
