import { Form } from "./Form";
import { Image } from "./Image";

export class Category {
  id: number;
  descriptionEN: string;
  descriptionPT: string;
  forms: Form[];
  image: Image;
}
