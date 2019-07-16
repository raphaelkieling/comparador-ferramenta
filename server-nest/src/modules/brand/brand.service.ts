import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Brand } from './brand.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BrandService {
  constructor(
    @InjectRepository(Brand)
    private readonly brandRepository: Repository<Brand>,
  ) {}

  findAll(): Promise<Brand[]> {
    return this.brandRepository.find();
  }

  findOne(id: number): Promise<Brand> {
    return this.brandRepository.findOne(id);
  }

  create(brand: Brand): Promise<Brand> {
    return this.brandRepository.save(brand);
  }

  async update(id: number, brand: Brand): Promise<boolean> {
    const result = await this.brandRepository.update(id, brand);
    return result.raw.changedRows >= 1;
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.brandRepository.delete(id);
    return result.affected >= 1;
  }
}
