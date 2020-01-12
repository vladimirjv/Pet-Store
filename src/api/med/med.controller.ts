import { Controller, UseGuards, Get, Post, Body } from '@nestjs/common';
import { AuthGuard } from '~/guards/auth.guard';
import { RolesGuard } from '~/guards/roles.guard';
import { Roles } from '~/decorators/roles.decorator';
import { RoleType } from '~/common/constants/role-type';
import { MedService } from './med.service';
import { CreateMedDto } from './dto/CreateMed.dto';

@Controller('meds')
@UseGuards(AuthGuard, RolesGuard)
export class MedController {
    constructor(private readonly medService: MedService) { }

    @Get()
    @Roles(RoleType.ADMIN, RoleType.USER)
    async list() {
        return this.medService.list();
    }

    @Post()
    @Roles(RoleType.USER, RoleType.ADMIN)
    async createMed(@Body() createMed: CreateMedDto) {
        return this.medService.createMed(createMed);
    }
}
