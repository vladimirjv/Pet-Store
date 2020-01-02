import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { PetEntity } from './pet.entity';

@EntityRepository(PetEntity)
export class PetRepository extends Repository<PetEntity> {}
