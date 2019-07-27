import { BaseDomain } from './base';
import { MaxLength, IsNotEmpty } from 'class-validator';
import { Column, OneToMany, Entity, OneToOne, JoinColumn } from 'typeorm';
import { CategoryToLanguage } from './categoryToLanguage.entity';
import { Form } from './form.entity';
import { CategoryToForm } from './categoryToForm.entity';
import { Image } from './image.entity';

@Entity()
export class Category extends BaseDomain {
  @OneToOne(type => Image)
  @JoinColumn()
  image: Image;

  @OneToMany(
    type => CategoryToLanguage,
    categoryToLanguage => categoryToLanguage.category,
  )
  translates: CategoryToLanguage[];

  @OneToMany(
    type => CategoryToForm,
    categoryToForm => categoryToForm.form,
  )
  forms: Form[];
}
