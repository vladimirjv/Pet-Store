import { Injectable } from '@nestjs/common';
import { UserLoginDto } from './dto/UserLoginDto';
import { UserEntity } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { UtilsService } from '../../providers/utils.service';
import { TokenPayloadDto } from './dto/TokenPayloadDto';
import { UserDto } from '../user/dto/User.dto';
import { ConfigService } from '../../shared/services/config.service';
import { JwtService } from '@nestjs/jwt';
import { ContextService } from 'src/providers/context.service';

@Injectable()
export class AuthService {
    private static authUserKey = 'user_key';

    constructor(
        private readonly userService: UserService,
        private readonly configService: ConfigService,
        private readonly jwtService: JwtService,
    ) {}

    async validateUser(userLoginDto: UserLoginDto): Promise<UserEntity> {
        const user = await this.userService.findByUsernameOrEmail({
            email: userLoginDto.email,
        });
        const isPasswordValid = await UtilsService.validateHash(
            userLoginDto.password,
            user && user.password,
        );
        if (!user || !isPasswordValid) {
            // throw new UserNotFoundException();
            return null;
        }
        return user;
    }

    async createToken(user: UserEntity | UserDto): Promise<TokenPayloadDto> {
        return new TokenPayloadDto({
            expiresIn: this.configService.getNumber('JWT_EXPIRATION_TIME'),
            accessToken: await this.jwtService.signAsync({id: user.id}),
        });
    }

    static setAuthUser(user: UserEntity) {
        ContextService.set(AuthService.authUserKey, user);
    }

    static getAuthUser(): UserEntity {
        return ContextService.get(AuthService.authUserKey);
    }
}
