import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetController } from './pet.controller';
import { PetService } from './pet.service';
import { PetRepository } from './pet.repository';
import { UserModule } from '../user/user.module';
import { PetResolver } from './pet.resolver';

@Module({
    imports: [
        TypeOrmModule.forFeature([PetRepository]),
        UserModule,
    ],
    controllers: [PetController],
    providers: [PetService, PetResolver],
})
export class PetModule { }
