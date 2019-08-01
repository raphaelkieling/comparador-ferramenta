import { Image } from '../domain/image.entity';
import { Form } from '../domain/form.entity';

export default class CategoryDTO {
    descriptionEN: string;
    descriptionPT: string;
    image: Image;
    forms: Form[];
}
