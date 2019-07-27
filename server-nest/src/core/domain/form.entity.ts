import { BaseDomain } from "./base";
import { Entity, OneToMany, Column } from "typeorm";
import { Field } from "./field.entity";

@Entity()
export class Form extends BaseDomain {
    @OneToMany(type => Field, field => field.form)
    fields: Field[];

    @Column('int')
    order: number;
}
