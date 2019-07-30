import { BaseDomain } from './base';
import { Category } from './category.entity';
import { ManyToOne, Entity, Column, JoinColumn } from 'typeorm';
import { Language } from './language.entity';
import { MaxLength } from 'class-validator';

@Entity()
export class CategoryToLanguage extends BaseDomain {
  @Column({ unique: true })
  @MaxLength(255)
  public title: string;

  @Column()
  categoryId: number;

  @Column()
  languageId: number;

  @ManyToOne(type => Category, category => category.translates)
  @JoinColumn({ name: 'categoryId' })
  public category: Category;

  @ManyToOne(type => Language)
  @JoinColumn({ name: 'languageId' })
  public language: Language;

  constructor({
    title = '',
    language = null,
    category = null,
  } = {}) {
    super();
    this.title = title;
    this.language = language;
    this.category = category;
  }
}
