import { Injectable } from '@nestjs/common';
import { CategoryRepository } from './category.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/core/domain/category.entity';
import CategoryCreateDTO from 'src/core/dto/category.dto';
import { Language } from 'src/core/domain/language.entity';
import { LanguageRepository } from '../language/language.repository';
import { LanguageService } from '../language/language.service';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category) private readonly categoryRepository: CategoryRepository,
        private readonly languageService: LanguageService) { }

    findAll(): Promise<Category[]> {
        return this.categoryRepository.find();
    }

    findOne(id: number): Promise<Category> {
        return this.categoryRepository.findOne(id);
    }

    create(data: CategoryCreateDTO): Promise<Category> {
        await this.languageService.getIdByLanguageName('en');
        return 
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
