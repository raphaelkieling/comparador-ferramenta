import { CategoryService } from './category.service';
import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body,
    UseInterceptors,
    UploadedFile,
} from '@nestjs/common';
import CategoryCreateDTO from 'src/core/dto/category.dto';
import CategoryDTO from 'src/core/dto/category.dto';
import { BaseController } from '../base.controller';
import { FileInterceptor } from '@nestjs/platform-express'

@Controller('category')
export class CategoryController extends BaseController {
    constructor(private service: CategoryService) {
        super();
    }

    @Get()
    public find(): Promise<CategoryDTO[]> {
        return this.service.findAll();
    }

    @Get(':id')
    public findOne(@Param('id') id: number): Promise<CategoryDTO> {
        return this.service.findOne(id);
    }

    @Post(':id/upload')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@Param('id') id: number, @UploadedFile() file) {
        return this.service.setImage(id, file.filename);
    }

    @Post()
    public async create(@Body() data: CategoryCreateDTO) {
        return await this.service.create(data);
    }

    @Put(':id')
    public update(
        @Param('id') id: number,
        @Body() data: CategoryDTO,
    ): Promise<any> {
        return this.service.update(id, data);
    }

    @Delete(':id')
    public delete(@Param('id') id: number): Promise<any> {
        return this.service.delete(id);
    }
}
