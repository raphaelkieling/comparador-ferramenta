import { BaseDomain } from "./base";
import { Entity, Column } from "typeorm";

@Entity()
export class Image extends BaseDomain {
    @Column({})
    url: string;
}
