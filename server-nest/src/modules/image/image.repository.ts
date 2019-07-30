import { EntityRepository, Repository } from "typeorm";
import { Image } from "src/core/domain/image.entity";

@EntityRepository(Image)
export class ImageRepository extends Repository<Image> {}