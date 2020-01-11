import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';
import { ConfigService } from './shared/services/config.service';
import { UserModule } from './api/user/user.module';
import { AuthModule } from './api/auth/auth.module';
import { PetModule } from './api/pet/pet.module';
import { VaccineModule } from './api/vaccine/vaccine.module';
import { MedModule } from './api/med/med.module';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [SharedModule],
            useFactory: (configService: ConfigService) =>
                configService.typeOrmConfig,
            inject: [ConfigService],
        }),
        UserModule,
        AuthModule,
        PetModule,
        VaccineModule,
        MedModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
