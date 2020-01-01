import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UserController {

    @Get()
    list() {
        return 'List of users';
    }
}
