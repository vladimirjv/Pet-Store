import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { UserLoginDto } from '../dto/UserLoginDto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super();
    }

    //   async validate(username: string, password: string): Promise<any> {
    async validate(userLoginDto: UserLoginDto): Promise<any> {
        // tslint:disable-next-line:no-console
        console.log(userLoginDto.email);
        // tslint:disable-next-line:no-console
        console.log('hey');
        const user = await this.authService.validateUser(userLoginDto);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}
