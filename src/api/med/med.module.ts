import { Module } from '@nestjs/common';
import { MedService } from './med.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedRepository } from './med.repository';
import { MedController } from './med.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([MedRepository]),
    ],
    providers: [MedService],
    controllers: [MedController],
})
export class MedModule { }
