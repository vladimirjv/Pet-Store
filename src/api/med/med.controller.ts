import { Controller, UseGuards, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { AuthGuard } from '~/guards/auth.guard';
import { RolesGuard } from '~/guards/roles.guard';
import { Roles } from '~/decorators/roles.decorator';
import { RoleType } from '~/common/constants/role-type';
import { MedService } from './med.service';
import { CreateMedDto } from './dto/CreateMed.dto';
import { UpdateMedDto } from './dto/UpdateMed.dto';

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

    @Get(':id')
    @Roles(RoleType.USER, RoleType.ADMIN)
    async getMed(@Param('id') id: string) {
        return this.medService.getMed(id);
    }
    @Put(':id')
    @Roles(RoleType.USER, RoleType.ADMIN)
    async updateMed(
        @Param('id') id: string,
        @Body() updateMedDto: UpdateMedDto,
    ) {
        return this.medService.updateMed(id, updateMedDto);
    }

    @Delete(':id')
    @Roles(RoleType.USER, RoleType.ADMIN)
    async deleteMed(@Param('id') id: string) {
        return this.medService.delete(id);
    }
}
