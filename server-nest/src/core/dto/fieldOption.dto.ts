import { IsNotEmpty } from "class-validator";
import LanguageValue from "../types/LanguageValue";

export default class FieldOptionDTO {
    @IsNotEmpty()
    description: LanguageValue;
}
