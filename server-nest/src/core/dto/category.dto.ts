import { Form } from '../domain/form.entity';
import { Midia } from '../domain/midia.entity';

export default class CategoryDTO {
    descriptionEN: string;
    descriptionPT: string;
    image: Midia;
    forms: Form[];
}
