import { Module, Global } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { BrandModule } from './modules/brand/brand.module';
import { CategoryModule } from './modules/category/category.module';
import { GroupModule } from './modules/group/group.module';
import * as config from 'config';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Global()
@Module({
    imports: [
        MulterModule.register({
            storage: diskStorage({
                destination: './public/uploads',
                filename: (req, file, cb) => {
                    const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
                    return cb(null, `${randomName}${extname(file.originalname)}`)
                }
            })
        }),
        TypeOrmModule.forRoot({
            type: config.get<any>('database.type'),
            host: config.get<any>('database.host'),
            port: config.get<any>('database.port'),
            username: config.get<any>('database.username'),
            password: config.get<any>('database.password'),
            database: config.get<any>('database.database'),
            entities: config.get<any>('database.entities'),
            synchronize: config.get<any>('database.synchronize'),
            logging: config.get<any>('database.logging'),
        }),
        UserModule,
        AuthModule,
        BrandModule,
        CategoryModule,
        GroupModule,
    ],
    controllers: [AppController],
    providers: [AppService],
    exports: [MulterModule]
})
export class AppModule { }
