import { Controller, UseGuards, Post, Request, HttpCode, HttpStatus, Body } from '@nestjs/common';
import { UserLoginDto } from './dto/UserLoginDto';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { LoginPayloadDto } from './dto/LoginPayloadDto';
import { UserDto } from '../user/dto/User.dto';
// import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {

    constructor(
        public readonly authService: AuthService,
        public readonly userService: UserService,
    ) {}

    @Post('login')
    @HttpCode(HttpStatus.OK)
    async login(@Body() userLoginDto: UserLoginDto) {
        // tslint:disable-next-line:no-console
        console.log(userLoginDto);
        const userEntity = await this.authService.validateUser(userLoginDto);
        const token = await this.authService.createToken(userEntity);
        return new LoginPayloadDto(new UserDto(userEntity), token);
    }
}
