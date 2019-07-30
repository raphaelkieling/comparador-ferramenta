import { IsNotEmpty, MaxLength } from "class-validator";
import LanguageValue from "../types/LanguageValue";

export default class CategoryDTO {
    @IsNotEmpty()
    title: LanguageValue;
    image: string;
}
