import { IsNotEmpty, MaxLength } from "class-validator";

export default class CategoryDTO {
    @IsNotEmpty()
    @MaxLength(150)
    title: string;
}
