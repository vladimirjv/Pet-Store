import { Injectable } from '@nestjs/common';
import { MedRepository } from './med.repository';
import { Med } from './med.entity';
import { FindManyOptions, FindConditions } from 'typeorm';
import { CreateMedDto } from './dto/CreateMed.dto';
import { AutomapClasses } from '~/helpers/functions/AutomapClasses';

@Injectable()
export class MedService {
    constructor(
        private readonly medRepository: MedRepository,
    ) { }

    async listAndCount(options: FindManyOptions) {
        const meds: [Med[], number] = await this.medRepository.findAndCount(options);
        return meds;
    }

    async list(): Promise<Med[]> {
        const meds = await this.medRepository.find();
        return meds;
    }

    async createMed(createMed: CreateMedDto) {
        const MedIns = AutomapClasses<CreateMedDto, Med>(createMed, Med);
        const med = this.medRepository.create(MedIns);
        return await this.medRepository.save(med);
    }
}
