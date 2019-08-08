import { BaseDomain } from './base';
import { Entity, Column } from 'typeorm';
import { IsBase64 } from 'class-validator';

@Entity()
export class Image extends BaseDomain {
    @Column({ type: 'blob' })
    @IsBase64()
    base64: string;
}
