import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
} from '@nestjs/common';
import { BrandService } from './brand.service';
import { Brand } from '../../core/domain/brand.entity';
import { BaseController } from '../base.controller';

@Controller('brand')
export class BrandController extends BaseController {
    constructor(private brandService: BrandService) {
        super();
    }

    @Get()
    public find(): Promise<Brand[]> {
        return this.brandService.findAll();
    }

    @Get(':id')
    public findOne(@Param('id') id: number): Promise<Brand> {
        return this.brandService.findOne(id);
    }

    @Post()
    public create(@Body() brand: Brand): Promise<Brand> {
        return this.brandService.create(brand);
    }

    @Put(':id')
    public update(@Param('id') id: number, @Body() brand: Brand): Promise<any> {
        return this.brandService.update(id, brand);
    }

    @Delete(':id')
    public delete(@Param('id') id: number): Promise<any> {
        return this.brandService.delete(id);
    }
}
