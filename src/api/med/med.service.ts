import { Injectable } from '@nestjs/common';
import { MedRepository } from './med.repository';

@Injectable()
export class MedService {
    constructor(
        private readonly medRepository: MedRepository,
    ) {}

}
