import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as Joi from 'joi';
// import { SequelizeModule } from '@nestjs/sequelize';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'env/.env.dev',
      isGlobal: true,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test', 'provision')
          .default('development'),
        PORT: Joi.number().default(3000),
      }),
      validationOptions: {
        allowUnknown: true,
        abortEarly: false,
      },
    }),
    // SequelizeModule.forRoot({
    //   dialect: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'divinefavour',
    //   password: '',
    //   database: 'quiz_dev',
    //   models: [],
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
