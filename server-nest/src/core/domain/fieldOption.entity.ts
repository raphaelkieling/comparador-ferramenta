import { BaseDomain } from './base';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Field } from './field.entity';

@Entity()
export class FieldOption extends BaseDomain {
    @Column()
    descriptionEN: string;
    @Column()
    descriptionPT: string;

    @Column({ name: "fieldId" })
    fieldId: number;

    @ManyToOne(type => Field, field => field.options)
    @JoinColumn({ name: "fieldId" })
    field: Field;
}
