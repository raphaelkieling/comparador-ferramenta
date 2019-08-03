import { ErrorsInterceptor } from 'src/core/interceptors/error.interceptor';
import { ResponseInterceptor } from 'src/core/interceptors/response.interceptor';
import { AuthGuard } from '@nestjs/passport';
import {
    UseGuards,
    Controller,
    UseInterceptors,
} from '@nestjs/common';

@UseGuards(AuthGuard('jwt'))
@UseInterceptors(new ErrorsInterceptor())
@UseInterceptors(new ResponseInterceptor())
export class BaseController { }
