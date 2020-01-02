import Faker from 'faker';
import { define } from 'typeorm-seeding';
import { UserEntity } from '../../api/user/user.entity';
import { RoleType } from 'src/common/constants/role-type';

define(UserEntity, (faker: typeof Faker, settings: { role: RoleType }) => {
    const gender = faker.random.number(1);
    const firstName = faker.name.firstName(gender);
    const lastName = faker.name.lastName(gender);
    const email = faker.internet.email(firstName, lastName);
    const password = faker.internet.password(7);
    const phone = faker.phone.phoneNumber();

    const user = new UserEntity();
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.password = password;
    user.phone = phone;
    user.role = settings.role;
    return user;
});
