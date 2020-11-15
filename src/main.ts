import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config({path: process.env.CONFIG_NAME || '.env'});
  const appPort = process.env.BACKEND_PORT || 3000;
  const app = await NestFactory.create(AppModule);
  await app.listen(appPort);
  Logger.log(`Server running on http://localhost:${appPort}!!!`, "Bootstrap")
}
bootstrap();
