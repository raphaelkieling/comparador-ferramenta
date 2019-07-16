import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsInt, IsOptional, MaxLength } from 'class-validator';
import { BaseDomain } from './base';

@Entity()
export class Brand extends BaseDomain {
  @Column({ unique: true })
  @MaxLength(150)
  description: string;
}
