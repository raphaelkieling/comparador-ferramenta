import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { BrandModule } from './modules/brand/brand.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UserModule, AuthModule, BrandModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
