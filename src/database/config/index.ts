import { envConfig } from 'src/configuration';

const { DB_DATABASE, DB_PASSWORD, DB_USER, DB_HOST, DB_PORT } = envConfig();

export default {
  development: {
    database: DB_DATABASE,
    password: DB_PASSWORD,
    username: DB_USER,
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
  },
  test: {
    database: `${DB_DATABASE}_test`,
    password: DB_PASSWORD,
    username: DB_USER,
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
  },
  heroku: {
    database: DB_DATABASE,
    password: DB_PASSWORD,
    username: DB_USER,
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
  },
  production: {
    database: DB_DATABASE,
    password: DB_PASSWORD,
    username: DB_USER,
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
  },
};
