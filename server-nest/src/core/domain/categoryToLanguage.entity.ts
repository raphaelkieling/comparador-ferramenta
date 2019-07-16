import { BaseDomain } from './base';
import { Category } from './category.entity';
import { ManyToOne, Entity } from 'typeorm';
import { Language } from './language.entity';

@Entity()
export class CategoryToLanguage extends BaseDomain {
  public title: string;

  @ManyToOne(type => Category, category => category.languages)
  public category: Category;

  @ManyToOne(type => Language)
  public language: Language;
}
