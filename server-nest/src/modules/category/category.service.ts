import { Injectable } from '@nestjs/common';
import { CategoryRepository } from './category.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/core/domain/category.entity';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category) private readonly categoryRepository: CategoryRepository) { }

    findAll(): Promise<Category[]> {
        return this.categoryRepository.find();
    }

    findOne(id: number): Promise<Category> {
        return this.categoryRepository.findOne(id);
    }

    create(data: Category): Promise<Category> {
        return this.categoryRepository.save(data);
    }

    async update(id: number, data: Category): Promise<boolean> {
        const result = await this.categoryRepository.update(id, data);
        return result.raw.changedRows >= 1;
    }

    async delete(id: number): Promise<boolean> {
        const result = await this.categoryRepository.delete(id);
        return result.affected >= 1;
    }
}
