import { Module } from '@nestjs/common';
import { ImageService } from './image.service';
import { ImageRepository } from './image.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ImageRepository])],
  providers: [ImageService]
})
export class ImageModule { }
