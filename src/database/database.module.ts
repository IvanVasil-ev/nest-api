import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { envConfig } from 'src/configuration';
import config from './config';

import { User } from 'src/api/users/entity/users.entity';

const { ENV } = envConfig();
const { database, username, password, dialect, host, port } = config[ENV];

@Module({
  imports: [
    SequelizeModule.forRoot({
      database,
      username,
      password,
      dialect,
      host,
      port,
      models: [User],
      autoLoadModels: true,
    }),
  ],
})
export class DatabaseModule {}
