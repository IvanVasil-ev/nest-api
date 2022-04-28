/* Environment */
export const ENVS = {
  development: 'development',
  production: 'production',
  heroku: 'heroku',
} as const;

export const envConfig = () => {
  const { env: environment } = process;

  const {
    ENV = ENVS.development,
    NODE_ENV = '',
    CLIENT_URL = 'http://localhost:3000',
    SERVER_NAME = 'Nest API',
    DB_HOST = 'localhost',
    DB_DATABASE = 'root',
    DB_PASSWORD = '',
    DB_USER = 'root',
    DB_PORT = 5432,
    API_KEY = '',
    PORT = 4040,
  } = environment;

  return {
    ENV,
    NODE_ENV,
    CLIENT_URL,
    SERVER_NAME,
    DB_HOST,
    DB_DATABASE,
    DB_PASSWORD,
    DB_USER,
    DB_PORT,
    API_KEY,
    PORT,
  };
};

/* Roles */
export const MODEL_ROLES = ['admin', 'user'] as const;
export const ROLES = {
  admin: 'admin',
  user: 'user',
} as const;

/* Database */
export const SEQUELIZE = 'SEQUELIZE';
export const USERS_REPOSITORY = 'USERS_REPOSITORY';
export const POSTS_REPOSITORY = 'POSTS_REPOSITORY';
