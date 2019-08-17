import { Mapper } from './mapper';
import { Midia } from '../domain/Midia';

export class MidiaMapper extends Mapper<Midia> {
  fromSource(model: any): Midia {
    if (!model) return new Midia();

    const category = new Midia();
    category.id = model.id;
    category.url = model.url;
    return category;
  }

  toSource(model: Midia): Midia {
    return {
      id: model.id,
      url: model.url
    }
  }
}
