import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { LocalStrategy } from './Strategies/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './Strategies/jwt.strategy';

@Module({
    imports: [UserModule, PassportModule],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule { }
