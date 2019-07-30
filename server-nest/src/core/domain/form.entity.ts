import { BaseDomain } from "./base";
import { Entity, OneToMany, Column } from "typeorm";
import { Group } from "./group.entity";

@Entity()
export class Form extends BaseDomain {
    @OneToMany(type => Group, group => group.form)
    groups: Group[];

    @Column('int')
    order: number;
}
