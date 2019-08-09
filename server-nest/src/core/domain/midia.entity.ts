import { BaseDomain } from './base';
import { Entity, Column } from 'typeorm';

@Entity()
export class Midia extends BaseDomain {
    @Column()
    url: string;
}
