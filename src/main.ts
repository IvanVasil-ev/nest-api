import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { envConfig } from './configuration';
import { SwaggerModule } from './configuration/swagger';
import { AppModule } from './app.module';

const { PORT } = envConfig();

(async function () {
  try {
    const app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter(),
    );
    app.enableCors();
    app.setGlobalPrefix('/api');
    SwaggerModule(app);

    await app.listen(PORT, () => {
      console.log(`✅ [INFO]: Server started on port ${PORT}.`);
    });
  } catch (error: Error | unknown) {
    throw new Error(
      `❌ [ERROR]: ${
        error instanceof Error ? error.message : 'Unknown error'
      }.`,
    );
  }
})();
