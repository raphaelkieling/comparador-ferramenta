import { BaseDomain } from './base';
import { MaxLength, IsNotEmpty } from 'class-validator';
import { Column, OneToMany, Entity } from 'typeorm';
import { CategoryToLanguage } from './categoryToLanguage.entity';
import { Form } from './form.entity';
import { CategoryToForm } from './categoryToForm.entity';

@Entity()
export class Category extends BaseDomain {
  @OneToMany(
    type => CategoryToLanguage,
    categoryToLanguage => categoryToLanguage.category,
  )
  languages: CategoryToLanguage[];

  @OneToMany(
    type => CategoryToForm,
    categoryToForm => categoryToForm.form,
  )
  forms: Form[];
}
