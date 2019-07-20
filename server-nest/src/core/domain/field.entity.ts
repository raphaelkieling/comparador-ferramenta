import { BaseDomain } from "./base";
import { Entity, Column, ManyToOne } from "typeorm";
import { Form } from "./form.entity";

enum FieldType {
    SELECT,
    TEXT,
    NUMBER,
}

@Entity()
export class Field extends BaseDomain {
    @Column('int')
    type: FieldType;

    @ManyToOne(type => Form, form => form.fields)
    form: Form;
}
