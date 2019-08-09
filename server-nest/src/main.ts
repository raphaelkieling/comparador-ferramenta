import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import { ValidationPipe } from '@nestjs/common';
import * as config from 'config';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import { join } from 'path'
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(
        AppModule,
    );
    const PORT = process.env.PORT || config.get<number>('application.port');

    app.setGlobalPrefix('api');
    app.useGlobalPipes(new ValidationPipe());

    app.enableCors();
    app.use(helmet());
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    app.useStaticAssets(join(__dirname, '..', 'public'));

    await app.listen(PORT).finally(() => {
        // tslint:disable-next-line: no-console
        console.info(`Server started on port ${PORT}`);
        // tslint:disable-next-line: no-console
        console.info(`We are currently in ${config.util.getEnv('NODE_ENV')} mode.`);
    });
}

bootstrap();
