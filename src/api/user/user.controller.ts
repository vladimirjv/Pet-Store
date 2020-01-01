import { Controller, Get, Post, Body, UseGuards, HttpCode, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterUserDto } from './dto/RegisterUser.dto';
import { AuthGuard } from '../../guards/auth.guard';
import { Roles } from '../../decorators/roles.decorator';
import { RoleType } from '../../common/constants/role-type';
import { RolesGuard } from '../../guards/roles.guard';

@Controller('users')
@UseGuards(AuthGuard, RolesGuard)
export class UserController {

    constructor(private userService: UserService) {}

    @Get()
    @Roles(RoleType.USER)
    list() {
        return this.userService.list();
    }

    @Post()
    create(@Body() body: RegisterUserDto) {
        // todo
        // return body;
        return this.userService.createUser(body);
    }

    @Get('admin')
    @Roles(RoleType.ADMIN)
    @HttpCode(HttpStatus.OK)
    async admin() {
        return 'only for you admin';
    }
}
