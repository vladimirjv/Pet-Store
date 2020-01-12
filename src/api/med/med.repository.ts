import { EntityRepository, Repository } from 'typeorm';
import { Med as MedEntity } from './med.entity';

@EntityRepository(MedEntity)
export class MedRepository extends Repository<MedEntity> {}
