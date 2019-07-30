import { BaseDomain } from "./base";
import { Entity, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Field } from "./field.entity";
import { FieldOption } from "./fieldOption.entity";
import { Language } from "./language.entity";
import { MaxLength } from "class-validator";

@Entity()
export class FieldOptionToLanguage extends BaseDomain {
    @Column({ unique: true })
    @MaxLength(255)
    public description: string;

    @Column()
    fieldOptionId: number;

    @Column()
    languageId: number;

    @ManyToOne(type => FieldOption, fieldOption => fieldOption.translates)
    @JoinColumn({ name: 'fieldOptionId' })
    public fieldOption: FieldOption;

    @ManyToOne(type => Language)
    @JoinColumn({ name: 'languageId' })
    public language: Language;
}
