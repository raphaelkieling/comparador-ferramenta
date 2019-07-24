import { Category } from "src/core/domain/category.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> {
}