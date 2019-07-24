import { Module } from '@nestjs/common';
import { LanguageController } from './language.controller';
import { LanguageService } from './language.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LanguageRepository } from './language.repository';

@Module({
  imports: [TypeOrmModule.forFeature([LanguageRepository])],
  controllers: [LanguageController],
  providers: [LanguageService]
})
export class LanguageModule { }
