import { Category } from "src/core/domain/category.entity";
import { EntityRepository, Repository } from "typeorm";
import CategoryDTO from "src/core/dto/category.dto";

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> {
    findAllByLanguage(language: string): Promise<CategoryDTO[]> {
        return this.getQueryBuilder(language)
            .getRawMany();
    }

    findOneByLanguage(id: number, language: string): Promise<CategoryDTO> {
        return this.getQueryBuilder(language)
            .where({ id })
            .getRawOne();
    }

    getQueryBuilder(language: string) {
        return this.createQueryBuilder('c')
            .select([
                'c.id as id',
                'ct.title as title',
                'img.base64 as image'
            ])
            .leftJoin('c.image', 'img')
            .leftJoin('c.translates', 'ct')
            .leftJoin('ct.language', 'l')
            .where('l.name = :language', { language });
    }
}