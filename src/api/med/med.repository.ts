import { EntityRepository } from 'typeorm';
import { Med as MedEntity } from './med.entity';

@EntityRepository(MedEntity)
export class MedRepository {}
