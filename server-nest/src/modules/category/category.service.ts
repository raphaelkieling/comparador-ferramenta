import { Injectable } from '@nestjs/common';
import { CategoryRepository } from './category.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/core/domain/category.entity';
import CategoryCreateDTO from 'src/core/dto/category.dto';
import { Language } from 'src/core/domain/language.entity';
import { LanguageRepository } from '../language/language.repository';
import { LanguageService } from '../language/language.service';
import { CategoryToLanguage } from 'src/core/domain/categoryToLanguage.entity';
import { CategoryToLanguageRepository } from './categoryToLanguage.repository';
import CategoryDTO from 'src/core/dto/category.dto';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category) private readonly categoryRepository: CategoryRepository,
        @InjectRepository(CategoryToLanguageRepository) private readonly categoryToLanguageRepository: CategoryToLanguageRepository,
        private readonly languageService: LanguageService) { }

    findAll(language: string): Promise<CategoryDTO[]> {
        // select c.id, ct.title  from category as c
        // left join category_to_language as ct 
        // 	on ct.categoryId = c.id
        // left join language as l 
        // 	on l.id = ct.languageId
        // where l.name ='en';
        return this.categoryRepository.findAllByLanguage(language);
    }

    findOne(id: number, language: string): Promise<CategoryDTO> {
        return this.categoryRepository.findOneByLanguage(id, language);
    }

    async create(data: CategoryCreateDTO, language: string): Promise<Category> {
        const languageEntity: Language = await this.languageService.getByLanguageName(language);
        const category = new Category();

        await this.categoryRepository.save(category);

        const categoryToLanguage = new CategoryToLanguage();

        categoryToLanguage.title = data.title;
        categoryToLanguage.language = languageEntity;
        categoryToLanguage.category = category;
        await this.categoryToLanguageRepository.save(categoryToLanguage);

        return category;
    }

    async update(id: number, data: CategoryDTO, language: string): Promise<boolean> {
        const translation = await this.categoryToLanguageRepository.findOneByLanguage(id, language);
        console.log(translation)
        return true;
    }

    async delete(id: number): Promise<boolean> {
        const result = await this.categoryRepository.delete(id);
        return result.affected >= 1;
    }
}
