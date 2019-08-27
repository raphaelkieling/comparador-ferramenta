import { Mapper } from './mapper';
import { Brand } from '../domain/Brand';

export class BrandMapper extends Mapper<Brand> {
  fromSource(model: any): any {
    const brand = new Brand();
    brand.id = model.id;
    brand.description = model.description;
    return brand;
  }

  toSource(model: Brand): any {
    return {
      id: model.id,
      description: model.description
    }
  }
}
