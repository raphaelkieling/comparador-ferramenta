import { Category } from 'src/core/domain/category.entity';
import { EntityRepository, Repository } from 'typeorm';
import CategoryDTO from 'src/core/dto/category.dto';

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> {
    findAllByLanguage(): Promise<CategoryDTO[]> {
        return this.find({
            relations: ['image'],
        });
    }

    findOneByLanguage(id: number): Promise<CategoryDTO> {
        return this.findOne({
            where: {
                id,
            },
            relations: ['image', 'forms'],
        });
    }
}
