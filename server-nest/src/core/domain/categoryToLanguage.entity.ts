import { BaseDomain } from './base';
import { Category } from './category.entity';
import { ManyToOne, Entity, Column } from 'typeorm';
import { Language } from './language.entity';
import { MaxLength } from 'class-validator';

@Entity()
export class CategoryToLanguage extends BaseDomain {
  @Column({ unique: true })
  @MaxLength(255)
  public title: string;

  @ManyToOne(type => Category, category => category.languages)
  public category: Category;

  @ManyToOne(type => Language)
  public language: Language;
}
