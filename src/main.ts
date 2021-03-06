import { ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { ExpressAdapter, NestExpressApplication } from '@nestjs/platform-express';
import * as register from 'module-alias/register';
// tslint:disable-next-line:no-unused-expression
register;
import * as compression from 'compression';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import {
    initializeTransactionalContext,
    patchTypeORMRepositoryWithBaseRepository,
} from 'typeorm-transactional-cls-hooked';

import { AppModule } from './app.module';
import { ConfigService } from './shared/services/config.service';
import { SharedModule } from './shared/shared.module';

async function bootstrap() {
    initializeTransactionalContext();
    patchTypeORMRepositoryWithBaseRepository();

    const app = await NestFactory.create<NestExpressApplication>(
        AppModule,
        new ExpressAdapter(),
        {
            cors: true,
        },
    );
    app.enable('trust proxy');

    app.use(helmet());
    app.use(compression());
    app.use(morgan('combined'));

    // const reflector = app.get(Reflector);
    // app.useGlobalFilters(
    //     new HttpExceptionFilter(reflector),
    //     new QueryFailedFilter(reflector),
    // );
    // app.useGlobalInterceptors(new ClassSerializerInterceptor(reflector));

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            transform: true,
            dismissDefaultMessages: true,
            validationError: {
                target: false,
            },
        }),
    );

    const configService = app.select(SharedModule).get(ConfigService);
    const port = configService.getNumber('PORT');
    app.setGlobalPrefix('api');
    await app.listen(port);
    // tslint:disable-next-line:no-console
    console.log(`Server running on ${port}`);
}
bootstrap();
