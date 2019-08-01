import { BaseDomain } from './base';
import { Entity, Column, OneToMany } from 'typeorm';
import { Group } from './group.entity';
import { FieldOption } from './fieldOption.entity';

enum FieldType {
    SELECT,
    TEXT,
    NUMBER,
}

@Entity()
export class Field extends BaseDomain {
    @Column('int')
    type: FieldType;

    @OneToMany(type => FieldOption, fieldOption => fieldOption, { cascade: true })
    options: [];

    @Column()
    descriptionEN: string;

    @Column()
    descriptionPT: string;

    @OneToMany(type => Group, group => group.fields)
    groups: Group[];

    @Column('int')
    order: number;
}
