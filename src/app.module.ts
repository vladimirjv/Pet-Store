import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';
import { ConfigService } from './shared/services/config.service';
import { UserModule } from './api/user/user.module';
import { AuthModule } from './api/auth/auth.module';
import { PetModule } from './api/pet/pet.module';
// import { VaccineModule } from './api/vaccine/vaccine.module';
import { MedModule } from './api/med/med.module';
import { join } from 'path';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [SharedModule],
            useFactory: (configService: ConfigService) =>
                configService.typeOrmConfig,
            inject: [ConfigService],
        }),
        GraphQLModule.forRoot({
            typePaths: ['src/api/**/*.graphql'],
            installSubscriptionHandlers: true,
        }),
        UserModule,
        AuthModule,
        PetModule,
        MedModule,
        // VaccineModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
