import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { BrandModule } from './modules/brand/brand.module';
import { CategoryModule } from './modules/category/category.module';
import { LanguageModule } from './modules/language/language.module';
import * as config from 'config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: config.get<any>('database.type'),
      host: config.get<any>('database.host'),
      port: config.get<any>('database.port'),
      username: config.get<any>('database.username'),
      password: config.get<any>('database.password'),
      database: config.get<any>('database.database'),
      entities: config.get<any>('database.entities'),
      synchronize: config.get<any>('database.synchronize'),
    }),
    UserModule,
    AuthModule,
    BrandModule,
    CategoryModule,
    LanguageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
