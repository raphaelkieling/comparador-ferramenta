import { Field } from './Field';

export class Group {
  descriptionEN: string;
  descriptionPT: string;
  fields: Field[];
  order: number;

  constructor({ order, fields } = { order: 1, fields: [] }) {
    this.fields = fields;
    this.order = order;
  }
}
