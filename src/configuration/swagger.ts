import { DocumentBuilder, SwaggerModule as Module } from '@nestjs/swagger';

const config = new DocumentBuilder()
  .setTitle('Nest API')
  .setDescription('The Nest.Js API swagger.')
  .setVersion('1.0')
  .addTag('Users')
  .build();

const document = (app) => Module.createDocument(app, config);

export const SwaggerModule = (app) => Module.setup('docs', app, document(app));
