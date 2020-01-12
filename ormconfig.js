/* tslint:disable:quotemark object-literal-sort-keys */
import * as dotenv from 'dotenv';
import * as register from 'module-alias/register';
// tslint:disable-next-line:no-unused-expression
register;
// import { SnakeNamingStrategy } from './src/snake-naming.strategy';

if (!module.hot /* for webpack HMR */) {
    process.env.NODE_ENV = process.env.NODE_ENV || 'development';
}

dotenv.config({
    path: `.${process.env.NODE_ENV}.env`,
});

// Replace \\n with \n to support multiline strings in AWS
for (const envName of Object.keys(process.env)) {
    process.env[envName] = process.env[envName].replace(/\\n/g, '\n');
}

module.exports = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: +process.env.POSTGRES_PORT,
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    // namingStrategy: new SnakeNamingStrategy(),
    entities: [
        'src/api/**/*.entity{.ts,.js}',
    ],
    migrations: [
        'src/migrations/*{.ts,.js}',
    ],
    seeds: ['src/db/seeds/**/*.seed{.ts,.js}'],
    factories: ['src/db/factories/**/*.factory{.ts,.js}'],
};
