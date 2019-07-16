import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../../core/domain/user.entity';
import { AuthGuard } from '@nestjs/passport';
import { ErrorsInterceptor } from 'src/core/interceptors/error.interceptor';
import { ResponseInterceptor } from 'src/core/interceptors/response.interceptor';

@UseGuards(AuthGuard('jwt'))
@Controller('user')
@UseInterceptors(new ErrorsInterceptor())
@UseInterceptors(new ResponseInterceptor())
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  public find(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  public findOne(@Param('id') id: number): Promise<User> {
    return this.userService.findOne(id);
  }

  @Post()
  public create(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }

  @Put(':id')
  public update(@Param('id') id: number, @Body() user: User): Promise<any> {
    return this.userService.update(id, user);
  }

  @Delete(':id')
  public delete(@Param('id') id: number): Promise<any> {
    return this.userService.delete(id);
  }
}
