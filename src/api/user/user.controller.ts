import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterUserDto } from './dto/RegisterUser.dto';

@Controller('users')
export class UserController {

    constructor(private userService: UserService) {}

    @Get()
    list() {
        return this.userService.list();
    }

    @Post()
    create(@Body() body: RegisterUserDto) {
        // todo
        return body;
    }
}
