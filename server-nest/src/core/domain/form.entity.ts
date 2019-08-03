import { BaseDomain } from './base';
import { Entity, OneToMany, Column, JoinColumn } from 'typeorm';
import { Group } from './group.entity';

@Entity()
export class Form extends BaseDomain {
    @OneToMany(type => Group, group => group.form, { cascade: true })
    groups: Group[];

    @Column('int')
    order: number;
}
