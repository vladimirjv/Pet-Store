import Faker from 'faker';
import { define } from 'typeorm-seeding';
import { PetEntity } from '../..//api/pet/pet.entity';

define(PetEntity, (faker: typeof Faker, settings?: { min: number, max: number }) => {
    const gender = faker.random.number(1);
    const name = faker.name.firstName(gender);
    const age = faker.random.number({ min: settings.min || 0, max: settings.max || 10 });

    const pet = new PetEntity();
    pet.name = name;
    pet.age = age;
    return pet;
});
