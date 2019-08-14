import { Injectable } from '@nestjs/common';
import { CategoryRepository } from './category.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/core/domain/category.entity';
import CategoryCreateDTO from 'src/core/dto/category.dto';
import { Midia } from 'src/core/domain/midia.entity';
import { MidiaRepository } from '../midia/midia.repository';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: CategoryRepository,
        @InjectRepository(Midia)
        private readonly midiaRepository: MidiaRepository,
    ) { }

    findAll(): Promise<Category[]> {
        return this.categoryRepository.getAll();
    }

    findOne(id: number): Promise<Category> {
        return this.categoryRepository.getOne(id);
    }

    async setImage(id: number, filePath: string): Promise<Category> {
        const category: Category = await this.findOne(id);

        const midiaCategory = new Midia();
        midiaCategory.url = filePath;
        const midia: Midia = await this.midiaRepository.save(midiaCategory);

        category.image = midia;
        await this.categoryRepository.save(category);
        return this.categoryRepository.getOne(id);
    }

    async create(data: CategoryCreateDTO): Promise<Category> {
        return this.categoryRepository.save(data);
    }

    async update(id: number, data: Category): Promise<boolean> {
        data.id = Number(id);
        const result = await this.categoryRepository.save(data);
        return result !== undefined;
    }

    async delete(id: number): Promise<boolean> {
        const result = await this.categoryRepository.delete(id);
        return result.affected >= 1;
    }
}
