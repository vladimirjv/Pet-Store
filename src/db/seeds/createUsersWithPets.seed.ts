import { Factory, Seeder, times } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { UserEntity } from '../../api/user/user.entity';
import { PetEntity } from '../../api/pet/pet.entity';
import { RoleType } from '../../common/constants/role-type';
import { settings } from 'cluster';

interface PetFactorySettings {
    max: number;
    min: number;
}

export default class CreateUsersWithPets implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        const em = await connection.createEntityManager();
        await times(10, async n => {
            const pet = await factory<PetEntity, PetFactorySettings>(PetEntity)({ min: 0, max: 10 }).seed();
            const user = await factory(UserEntity)({ role: RoleType.USER }).make();
            user.pets = [pet];
            await em.save(user);
        });
    }
}
