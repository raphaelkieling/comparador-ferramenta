import { Category } from 'src/core/domain/category.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> {
    getAll(): Promise<Category[]> {
        return this.find({
            relations: ['image'],
        });
    }

    getOne(id: number): Promise<Category> {
        return this.findOne({
            where: {
                id,
            },
            relations: ['image', 'forms', 'forms.groups', 'forms.groups.fields'],
        });
        // return this.createQueryBuilder('c')
        //     .innerJoinAndSelect('c.image', 'images')
        //     .innerJoinAndSelect('c.forms', 'forms')
        //     .innerJoinAndSelect('forms.groups', 'groups')
        //     .innerJoinAndSelect('groups.fields', 'fields')
        //     .where('c.id = :ci', { ci: id })
        //     .getOne();
    }
}
