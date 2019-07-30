import { BaseDomain } from "./base";
import { Entity, Column, ManyToOne, OneToMany } from "typeorm";
import { Field } from "./field.entity";
import { FieldOptionToLanguage } from "./fieldOptionToLanguage.entity";

@Entity()
export class FieldOption extends BaseDomain {
    @ManyToOne(type => Field, field => field.options)
    field: Field;

    @OneToMany(
        type => FieldOptionToLanguage,
        fieldOptionToLanguage => fieldOptionToLanguage.fieldOption,
    )
    translates: FieldOptionToLanguage[];
}
