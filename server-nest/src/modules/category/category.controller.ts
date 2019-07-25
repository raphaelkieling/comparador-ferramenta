import { CategoryService } from "./category.service";
import { ErrorsInterceptor } from "src/core/interceptors/error.interceptor";
import { ResponseInterceptor } from "src/core/interceptors/response.interceptor";
import { AuthGuard } from "@nestjs/passport";
import { UseGuards, Controller, UseInterceptors, Get, Post, Put, Delete, Param, Body } from "@nestjs/common";
import { Category } from "src/core/domain/category.entity";
import CategoryCreateDTO from "src/core/dto/category.dto";
import { LanguageService } from "../language/language.service";

@UseGuards(AuthGuard('jwt'))
@Controller('category')
@UseInterceptors(new ErrorsInterceptor())
@UseInterceptors(new ResponseInterceptor())
export class CategoryController {
    constructor(private service: CategoryService) { }

    @Get()
    public find(): Promise<Category[]> {
        return this.service.findAll();
    }

    @Get(':id')
    public findOne(@Param('id') id: number): Promise<Category> {
        return this.service.findOne(id);
    }

    @Post()
    public async create(@Body() data: CategoryCreateDTO) {
        return this.service.create(data);
    }

    @Put(':id')
    public update(@Param('id') id: number, @Body() data: Category): Promise<any> {
        return this.service.update(id, data);
    }

    @Delete(':id')
    public delete(@Param('id') id: number): Promise<any> {
        return this.service.delete(id);
    }
}
