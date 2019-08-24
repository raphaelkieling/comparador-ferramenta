import { Mapper } from './mapper';
import { Midia } from '../domain/Midia';
import { environment } from 'src/environments/environment';

export class MidiaMapper extends Mapper<Midia> {
  fromSource(model: any): Midia {
    if (!model) return new Midia();

    const category = new Midia();
    category.id = model.id;
    category.url = model.url;
    category.publicUrl = environment.baseUrlApi + '/uploads/' + model.url;
    return category;
  }

  toSource(model: Midia): any {
    return {
      id: model.id,
      url: model.url
    }
  }
}
