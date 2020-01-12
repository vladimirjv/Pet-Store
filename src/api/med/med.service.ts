import { Injectable } from '@nestjs/common';
import { MedRepository } from './med.repository';
import { Med } from './med.entity';
import { FindManyOptions, FindConditions } from 'typeorm';
import { CreateMedDto } from './dto/CreateMed.dto';
import { AutomapClasses } from '~/helpers/functions/AutomapClasses';
import { UpdateMedDto } from './dto/UpdateMed.dto';
import { NotFoundWithId } from '~/exceptions/NotFoundWithId';

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

    async getMed(id: string) {
        try {
            return await this.medRepository.findOneOrFail(id);
        } catch (error) {
            throw new NotFoundWithId(id, Med.name);
        }
    }

    async updateMed(id: string, updateMed: UpdateMedDto): Promise<Med> {
        try {
            await this.medRepository.update(id, updateMed);
            return await this.medRepository.findOne(id);
        } catch (error) {
            throw new NotFoundWithId(id, Med.name);
        }
    }

    async delete(id: string) {
        try {
            await this.medRepository.findOneOrFail(id);
        } catch (error) {
            throw new NotFoundWithId(id, Med.name);
        }
        return await this.medRepository.delete(id);
    }
}
