import knex from 'knex';
import * as knexfile from '../knexfile.js';
import dotenv from 'dotenv';

dotenv.config();

const environment = process.env.NODE_ENV || 'development';

const myknex = knex(knexfile[environment]);
export default myknex;