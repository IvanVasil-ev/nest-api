import { Module } from '@nestjs/common';

/* Modules */
import { DotenvModule } from './configuration/dotenv';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './api/users/users.module';

@Module({
  imports: [DotenvModule, DatabaseModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
