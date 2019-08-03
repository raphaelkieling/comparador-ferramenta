import { Injectable } from '@nestjs/common';
import { CategoryRepository } from './category.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/core/domain/category.entity';
import CategoryCreateDTO from 'src/core/dto/category.dto';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: CategoryRepository,
    ) {}

    findAll(): Promise<Category[]> {
        return this.categoryRepository.getAll();
    }

    findOne(id: number): Promise<Category> {
        return this.categoryRepository.getOne(id);
    }

    async create(data: CategoryCreateDTO): Promise<Category> {
        return this.categoryRepository.save(data);
    }

    async update(id: number, data: Category): Promise<boolean> {
        const result = await this.categoryRepository.save(data);
        return result !== undefined;
    }

    async delete(id: number): Promise<boolean> {
        const result = await this.categoryRepository.delete(id);
        return result.affected >= 1;
    }
}
