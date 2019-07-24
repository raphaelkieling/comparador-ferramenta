import { Injectable } from '@nestjs/common';
import { Language } from 'src/core/domain/language.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { LanguageRepository } from './language.repository';

@Injectable()
export class LanguageService {
    constructor(
        @InjectRepository(Language) private readonly languageRepository: LanguageRepository
    ) { }

    getByLanguageName(name) {
        return this.languageRepository.findOne({
            where: {
                name,
            },
        })
    }

    async getIdByLanguageName(name):Promise<number | null> {
        const finded =  await this.languageRepository.findOne({
            where: {
                name,
            },
            select: ['id']
        })

        return (finded && finded.id) ? finded.id : null
    }
}
