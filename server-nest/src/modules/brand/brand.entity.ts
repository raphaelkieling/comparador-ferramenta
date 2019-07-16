import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsInt, IsOptional, MaxLength } from 'class-validator';

@Entity()
export class Brand {
  @PrimaryGeneratedColumn()
  @IsOptional()
  @IsInt()
  id: number;

  @Column({ unique: true })
  @MaxLength(150)
  description: string;
}
