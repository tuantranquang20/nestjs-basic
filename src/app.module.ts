import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
dotenv.config();
const { MONGODB_URL } = process.env;
@Module({
  imports: [MongooseModule.forRoot(MONGODB_URL), UserModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
