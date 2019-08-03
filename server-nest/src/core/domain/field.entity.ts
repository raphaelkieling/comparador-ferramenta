import { BaseDomain } from './base';
import { Entity, Column, OneToMany, JoinColumn, ManyToOne } from 'typeorm';
import { Group } from './group.entity';
import { FieldOption } from './fieldOption.entity';

enum FieldType {
    TEXT,
    NUMBER,
    SELECT,
}

@Entity()
export class Field extends BaseDomain {
    @Column('int')
    type: FieldType;

    @OneToMany(type => FieldOption, fieldOption => fieldOption.field, { cascade: true })
    options: FieldOption[];

    @Column()
    descriptionEN: string;

    @Column()
    descriptionPT: string;

    @Column({ name: "groupId" })
    groupId: number;

    @ManyToOne(type => Group, group => group.fields)
    @JoinColumn({ name: "groupId" })
    group: Group;

    @Column('int')
    order: number;
}
