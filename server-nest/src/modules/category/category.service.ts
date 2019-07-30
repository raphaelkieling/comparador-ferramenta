import { Injectable } from '@nestjs/common';
import { CategoryRepository } from './category.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/core/domain/category.entity';
import CategoryCreateDTO from 'src/core/dto/category.dto';
import { Language } from 'src/core/domain/language.entity';
import { LanguageService } from '../language/language.service';
import { CategoryToLanguage } from 'src/core/domain/categoryToLanguage.entity';
import { CategoryToLanguageRepository } from './categoryToLanguage.repository';
import CategoryDTO from 'src/core/dto/category.dto';
import { Constants } from '../constants';
import { Image } from 'src/core/domain/image.entity';
import { ImageRepository } from '../image/image.repository';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category) private readonly categoryRepository: CategoryRepository,
        @InjectRepository(Image) private readonly imageRepository: ImageRepository,
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
        const languageEntityEn: Language = await this.languageService.getByLanguageName(Constants.Language.EN);
        const languageEntityPt: Language = await this.languageService.getByLanguageName(Constants.Language.PT);

        const image = new Image();
        image.base64 = data.image;
        await this.imageRepository.save(image);

        const category = new Category();
        category.image = image;
        await this.categoryRepository.save(category);

        const categoryToLanguageEn = new CategoryToLanguage({
            title: data.title.en,
            language: languageEntityEn,
            category,
        });

        await this.categoryToLanguageRepository.save(categoryToLanguageEn);

        const categoryToLanguagePt = new CategoryToLanguage({
            title: data.title.pt,
            language: languageEntityPt,
            category,
        });

        await this.categoryToLanguageRepository.save(categoryToLanguagePt);

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
