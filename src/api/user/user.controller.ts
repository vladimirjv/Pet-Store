import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterUserDto } from './dto/RegisterUser.dto';
import { AuthGuard } from '../../guards/auth.guard';

@Controller('users')
export class UserController {

    constructor(private userService: UserService) {}

    @UseGuards(AuthGuard)
    @Get()
    list() {
        return this.userService.list();
    }

    @Post()
    create(@Body() body: RegisterUserDto) {
        // todo
        // return body;
        return this.userService.createUser(body);
    }
}
