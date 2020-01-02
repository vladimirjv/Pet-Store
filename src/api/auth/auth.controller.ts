import { Controller, UseGuards, Post, Request, HttpCode, HttpStatus, Body } from '@nestjs/common';
import { UserLoginDto } from './dto/UserLoginDto';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { LoginPayloadDto } from './dto/LoginPayloadDto';
import { UserDto } from '../user/dto/User.dto';
import { UserRegisterDto } from './dto/UserRegisterDto';
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
        const userEntity = await this.authService.validateUser(userLoginDto);
        const token = await this.authService.createToken(userEntity);
        return new LoginPayloadDto(new UserDto(userEntity), token);
    }

    @Post('register')
    @HttpCode(HttpStatus.OK)
    async userRegister(
        @Body() userRegisterDto: UserRegisterDto,
    ): Promise<UserDto> {
        return this.authService.register(userRegisterDto);
    }

    // @Get('me')
    // @HttpCode(HttpStatus.OK)
    // @UseGuards(AuthGuard)
    // @UseInterceptors(AuthUserInterceptor)
    // @ApiBearerAuth()
    // @ApiOkResponse({ type: UserDto, description: 'current user info' })
    // getCurrentUser(@AuthUser() user: UserEntity) {
    //     return user.toDto();
    // }
}
