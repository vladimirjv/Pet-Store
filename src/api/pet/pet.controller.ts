import { Controller, Get, UseGuards, Post, Body, Param } from '@nestjs/common';
import { PetService } from './pet.service';
// import { PetEntity } from './pet.entity';
import { CreatePetDto } from './dto/createPet.dto';
import { AuthGuard } from '~/guards/auth.guard';
import { RolesGuard } from '~/guards/roles.guard';
import { Roles } from '~/decorators/roles.decorator';
import { RoleType } from '~/common/constants/role-type';

@Controller('pets')
@UseGuards(AuthGuard, RolesGuard)
export class PetController {
    constructor(private readonly petService: PetService) {}

    @Get()
    @Roles(RoleType.USER, RoleType.ADMIN)
    async list() {
        return this.petService.list();
    }

    @Post()
    @Roles(RoleType.USER, RoleType.ADMIN)
    async createPet(@Body() createPetDto: CreatePetDto) {
        return this.petService.createPet(createPetDto);
    }

    @Get(':id')
    @Roles(RoleType.USER, RoleType.ADMIN)
    async getPet(@Param('id') id: string) {
        return this.petService.getPet(id);
    }
}
