import { Form } from "./Form";
import { Midia } from "./Midia";

export class Category {
  id: number;
  descriptionEN: string;
  descriptionPT: string;
  forms: Form[];
  image: Midia;
}
