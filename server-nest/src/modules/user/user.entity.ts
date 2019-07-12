import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsNotEmpty, IsBoolean, IsOptional, IsString, IsInt } from 'class-validator';

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
  email: string;

  @Column()
  @IsOptional()
  password?: string;

  @Column({ default: true })
  @IsBoolean()
  @IsOptional()
  isAdmin: boolean;
}
