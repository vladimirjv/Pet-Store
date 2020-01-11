import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Med as MedEntity } from '../../api/med/med.entity';

export default class CreateMeds implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(MedEntity)().seedMany(20);
  }
}
