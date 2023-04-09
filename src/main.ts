import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as cors from 'cors';
dotenv.config();
const { APP_PORT } = process.env;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cors());

  await app.listen(APP_PORT || 3000);
}
bootstrap();
