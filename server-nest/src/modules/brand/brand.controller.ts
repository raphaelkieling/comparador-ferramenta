import {
  Controller,
  UseGuards,
  UseInterceptors,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { BrandService } from './brand.service';
import { AuthGuard } from '@nestjs/passport';
import { ResponseInterceptor } from 'src/core/interceptors/response.interceptor';
import { ErrorsInterceptor } from 'src/core/interceptors/error.interceptor';
import { Brand } from './brand.entity';

@UseGuards(AuthGuard('jwt'))
@Controller('brand')
@UseInterceptors(new ErrorsInterceptor())
@UseInterceptors(new ResponseInterceptor())
export class BrandController {
  constructor(private brandService: BrandService) {}

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
