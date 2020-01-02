import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { UserEntity } from '../../api/user/user.entity';
import { RoleType } from '../../common/constants/role-type';

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(UserEntity)({ roles: RoleType.USER }).seedMany(5);
  }
}
