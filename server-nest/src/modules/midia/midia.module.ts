import { Module } from '@nestjs/common';
import { MidiaService } from './midia.service';
import { MidiaRepository } from './midia.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([MidiaRepository])],
    providers: [MidiaService]
})
export class MidiaModule { }
