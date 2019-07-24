import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { CategoryRepository } from './category.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LanguageRepository } from '../language/language.repository';
import { LanguageService } from '../language/language.service';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryRepository, LanguageRepository])],
  controllers: [CategoryController],
  providers: [CategoryService, LanguageService],
})
export class CategoryModule { }
