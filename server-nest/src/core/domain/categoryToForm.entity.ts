import { BaseDomain } from './base';
import { Category } from './category.entity';
import { ManyToOne, Entity, Column } from 'typeorm';
import { Language } from './language.entity';
import { MaxLength } from 'class-validator';
import { Form } from './form.entity';

@Entity()
export class CategoryToForm extends BaseDomain {
  @ManyToOne(type => Category, category => category.forms)
  public category: Category;

  @ManyToOne(type => Form)
  public form: Form;
}
