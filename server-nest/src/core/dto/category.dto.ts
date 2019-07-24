import { IsNotEmpty, MaxLength } from "class-validator";
import LanguageValue from "../types/LanguageValue";

export default class CategoryCreateDTO {
    @IsNotEmpty()
    title: LanguageValue;
}
