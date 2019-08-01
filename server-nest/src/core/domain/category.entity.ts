import { BaseDomain } from './base';
import { Column, OneToMany, Entity, OneToOne, JoinColumn } from 'typeorm';
import { Form } from './form.entity';
import { CategoryToForm } from './categoryToForm.entity';
import { Image } from './image.entity';

@Entity()
export class Category extends BaseDomain {
    @Column()
    descriptionEN: string;

    @Column()
    descriptionPT: string;

    @OneToOne(type => Image, { cascade: true, onDelete: 'CASCADE' })
    @JoinColumn()
    image: Image;

    @OneToMany(type => CategoryToForm, categoryToForm => categoryToForm.category, {
        cascade: true,
    })
    forms: Form[];
}
