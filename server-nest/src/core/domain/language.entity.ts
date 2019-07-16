import { Entity, Column } from 'typeorm';
import { BaseDomain } from './base';
import { IsNotEmpty, IsString, MaxLength, IsOptional } from 'class-validator';

@Entity()
export class Language extends BaseDomain {
  @Column()
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  name: string;

  @Column()
  @IsString()
  @MaxLength(100)
  nameInNativeEnglish: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  @IsOptional()
  dateFormat: string;

  @Column()
  @IsString()
  @MaxLength(100)
  @IsOptional()
  currency: string;
}
