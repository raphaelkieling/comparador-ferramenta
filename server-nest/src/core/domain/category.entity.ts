import { BaseDomain } from './base';
import { Column, OneToMany, Entity, OneToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { Form } from './form.entity';
import { Midia } from './midia.entity';

@Entity()
export class Category extends BaseDomain {
    @Column()
    descriptionEN: string;

    @Column()
    descriptionPT: string;

    @OneToOne(type => Midia, { cascade: true, onDelete: 'CASCADE' })
    @JoinColumn()
    image: Midia;


    @ManyToMany(type => Form, { cascade: true })
    @JoinTable({
        name: 'category_to_form',
        joinColumn: {
            name: 'formId',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'categoryId',
            referencedColumnName: 'id'
        }
    })
    forms: Form[];

}
