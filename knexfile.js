import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config();

export const development = {
    client: 'mysql',
    connection: {
        user: process.env.MYSQL_DB_USERNAME,
        password: process.env.MYSQL_DB_PASSWORD,
        host: 'localhost',
        database: process.env.MYSQL_DEVELOPMENT_DB,
        port: process.env.MYSQL_DB_PORT
    },
    migrations: {
        directory: __dirname + '/db/migrations',
    },
    seeds: {
        directory: __dirname + '/db/seeds',
    },
};

export const production = {
    client: 'mysql',
    connection: {
        user: process.env.MYSQL_DB_USERNAME,
        password: process.env.MYSQL_DB_PASSWORD,
        host: 'localhost',
        database: process.env.MYSQL_PRODUCTION_DB,
        port: process.env.MYSQL_DB_PORT
    },
    migrations: {
        directory: __dirname + '/db/migrations',
    },
    seeds: {
        directory: __dirname + '/db/seeds/production',
    },
};