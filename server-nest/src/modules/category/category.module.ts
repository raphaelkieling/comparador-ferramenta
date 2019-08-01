import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { CategoryRepository } from './category.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageRepository } from '../image/image.repository';

@Module({
  imports: [TypeOrmModule.forFeature([
    CategoryRepository,
    ImageRepository,
  ])],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule { }
