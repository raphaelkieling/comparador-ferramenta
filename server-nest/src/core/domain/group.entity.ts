import { BaseDomain } from "./base";
import { Entity, Column, OneToMany, ManyToOne } from "typeorm";
import { Field } from "./field.entity";
import { Form } from "./form.entity";

@Entity()
export class Group extends BaseDomain {
    @OneToMany(type => Field, field => field.groups)
    fields: Field[];

    @ManyToOne(type => Group, group => group.form)
    form: Form;

    @Column()
    description: string;
}
