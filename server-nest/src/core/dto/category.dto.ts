import { IsNotEmpty, MaxLength } from 'class-validator';
import LanguageValue from '../types/LanguageValue';
import FormDTO from './form.dto';

export default class CategoryDTO {
  @IsNotEmpty()
  title: LanguageValue;
  image: string;
  forms: FormDTO[];
}
