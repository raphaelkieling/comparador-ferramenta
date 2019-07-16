import { BaseDomain } from './base';
import { MaxLength, IsNotEmpty } from 'class-validator';
import { Column, OneToMany, Entity } from 'typeorm';
import { CategoryToLanguage } from './categoryToLanguage.entity';

@Entity()
export class Category extends BaseDomain {
  @MaxLength(255)
  @IsNotEmpty()
  @Column({ unique: true })
  title: string;

  @OneToMany(
    type => CategoryToLanguage,
    categoryToLanguage => categoryToLanguage.category,
  )
  languages: CategoryToLanguage[];
}
