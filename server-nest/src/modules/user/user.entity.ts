import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import {
  IsEmail,
  IsNotEmpty,
  IsBoolean,
  IsOptional,
  IsString,
  Max,
  IsInt,
  MaxLength,
} from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @IsOptional()
  @IsInt()
  id: number;

  @Column({ unique: true })
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  email: string;

  @Column()
  @IsOptional()
  @MaxLength(150)
  password?: string;

  @Column({ default: true })
  @IsBoolean()
  @IsOptional()
  isAdmin: boolean;
}
