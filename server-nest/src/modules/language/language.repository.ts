import { EntityRepository, Repository } from "typeorm";
import { Language } from "src/core/domain/language.entity";

@EntityRepository(Language)
export class LanguageRepository extends Repository<Language> {
}