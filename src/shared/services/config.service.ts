import * as dotenv from 'dotenv';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// import { IAwsConfig } from '../../interfaces/IAwsConfig';
// import { SnakeNamingStrategy } from '../../snake-naming.strategy';

export class ConfigService {
    constructor() {
        const nodeEnv = this.nodeEnv;
        dotenv.config({
            path: `.${nodeEnv}.env`,
        });

        // Replace \\n with \n to support multiline strings in AWS
        for (const envName of Object.keys(process.env)) {
            process.env[envName] = process.env[envName].replace(/\\n/g, '\n');
        }

        // tslint:disable-next-line:no-console
        // console.info(process.env);
    }

    public get(key: string): string {
        return process.env[key];
    }

    public getNumber(key: string): number {
        return Number(this.get(key));
    }

    get nodeEnv(): string {
        return this.get('NODE_ENV') || 'development';
    }

    get typeOrmConfig(): TypeOrmModuleOptions {
        let entities = [__dirname + '/../../api/**/*.entity{.ts,.js}'];
        let migrations = [__dirname + '/../../migrations/*{.ts,.js}'];

        if ((module as any).hot) {
            const entityContext = (require as any).context(
                './../../api',
                true,
                /\.entity\.ts$/,
            );
            entities = entityContext.keys().map(id => {
                const entityModule = entityContext(id);
                const [entity] = Object.values(entityModule);
                return entity;
            });
            const migrationContext = (require as any).context(
                './../../migrations',
                false,
                /\.ts$/,
            );
            migrations = migrationContext.keys().map(id => {
                const migrationModule = migrationContext(id);
                const [migration] = Object.values(migrationModule);
                return migration;
            });
        }
        return {
            entities,
            migrations,
            keepConnectionAlive: true,
            type: 'postgres',
            host: this.get('POSTGRES_HOST'),
            port: this.getNumber('POSTGRES_PORT'),
            username: this.get('POSTGRES_USERNAME'),
            password: this.get('POSTGRES_PASSWORD'),
            database: this.get('POSTGRES_DATABASE'),
            migrationsRun: true,
            logging: this.nodeEnv === 'development',
            // logging: ['error', 'schema', 'warn', 'info', 'log'],
            // namingStrategy: new SnakeNamingStrategy(),
        };
    }

}
