import { BaseDomain } from './base';
import { Entity, Column, ManyToOne } from 'typeorm';
import { Field } from './field.entity';

@Entity()
export class FieldOption extends BaseDomain {
    @ManyToOne(type => Field, field => field.options)
    field: Field;

    @Column()
    descriptionEN: string;

    @Column()
    descriptionPT: string;
}
