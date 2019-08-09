import { EntityRepository, Repository } from "typeorm";
import { Midia } from "src/core/domain/midia.entity";

@EntityRepository(Midia)
export class MidiaRepository extends Repository<Midia> {}
