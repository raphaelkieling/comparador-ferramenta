import { Mapper } from './mapper';
import { Category } from '../domain/Category';
import { MidiaMapper } from './midiaMapper';

export class CategoryMapper extends Mapper<Category> {
  private midiaMapper = new MidiaMapper();

  fromSource(model: any): any {
    const category = new Category();
    category.id = model.id;
    category.descriptionEN = model.descriptionEN;
    category.descriptionPT = model.descriptionPT;
    category.forms = model.forms;
    console.log(model)
    category.image = this.midiaMapper.fromSource(model.image);
    return category;
  }

  toSource(model: Category): Category {
    return {
      id: model.id,
      descriptionEN: model.descriptionEN,
      descriptionPT: model.descriptionPT,
      forms: model.forms,
      image: this.midiaMapper.toSource(model.image)
    }
  }
}
