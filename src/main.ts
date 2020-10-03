import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // import env variables
  const { port } = app.get('ConfigService')

  // enable cors for the API
  app.enableCors();

  const options = new DocumentBuilder()
    .setTitle('Fuber')
    .setDescription('Fuber API description')
    .setVersion('1.0')
    .addBearerAuth({
      type: 'openIdConnect',
      in: 'header',
      name: 'user'
    })
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  Logger.log("Hosting at port: " + port, "Bootstrap");

  await app.listen(port);
}
bootstrap();
