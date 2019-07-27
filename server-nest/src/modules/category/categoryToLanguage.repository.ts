import { EntityRepository, Repository } from "typeorm";
import { CategoryToLanguage } from "src/core/domain/categoryToLanguage.entity";

@EntityRepository(CategoryToLanguage)
export class CategoryToLanguageRepository extends Repository<CategoryToLanguage> {
    findOneByLanguage(id: number, language: string) {
        return this.findOne(id);
    }
}