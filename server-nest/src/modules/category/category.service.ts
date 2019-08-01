import { Injectable } from '@nestjs/common';
import { CategoryRepository } from './category.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/core/domain/category.entity';
import CategoryCreateDTO from 'src/core/dto/category.dto';
import CategoryDTO from 'src/core/dto/category.dto';
import { Constants } from '../constants';
import { Image } from 'src/core/domain/image.entity';
import { ImageRepository } from '../image/image.repository';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: CategoryRepository,
    ) {}

    findAll(): Promise<CategoryDTO[]> {
        return this.categoryRepository.findAllByLanguage();
    }

    findOne(id: number): Promise<CategoryDTO> {
        return this.categoryRepository.findOneByLanguage(id);
    }

    async create(data: CategoryCreateDTO): Promise<Category> {
        return this.categoryRepository.save(data);
    }

    async update(id: number, data: CategoryDTO): Promise<boolean> {
        const result = await this.categoryRepository.save(data);
        return result !== undefined;
    }

    async delete(id: number): Promise<boolean> {
        const result = await this.categoryRepository.delete(id);
        return result.affected >= 1;
    }
}
