import { BaseDomain } from './base';
import { Entity, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Field } from './field.entity';
import { Form } from './form.entity';

@Entity()
export class Group extends BaseDomain {
    @Column('int')
    order: number;

    @OneToMany(type => Field, field => field.group, { cascade: true })
    fields: Field[];

    @Column({ name: "formId" })
    formId: number;

    @ManyToOne(type => Form, form => form.groups)
    @JoinColumn({ name: "formId" })
    form: Form;

    @Column()
    descriptionEN: string;

    @Column()
    descriptionPT: string;
}
