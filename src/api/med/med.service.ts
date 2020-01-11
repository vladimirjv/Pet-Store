import { Injectable } from '@nestjs/common';
import { MedRepository } from './med.repository';
import { Med } from './med.entity';

@Injectable()
export class MedService {
    constructor(
        private readonly medRepository: MedRepository,
    ) {}

    async list() {
        const meds: [Med[], number] = await this.medRepository.findAndCount();
        return meds;
    }
}
