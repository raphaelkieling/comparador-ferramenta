import { IsOptional, MaxLength } from "class-validator";

export default class LanguageValue {
    @IsOptional()
    @MaxLength(150)
    en?: string;
    @IsOptional()
    @MaxLength(150)
    pt?: string;
}