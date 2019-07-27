import { PrimaryGeneratedColumn, Entity, BaseEntity } from 'typeorm';
import { IsOptional, IsInt } from 'class-validator';

@Entity()
export abstract class BaseDomain {
  @PrimaryGeneratedColumn()
  @IsOptional()
  @IsInt()
  id?: number;
}
