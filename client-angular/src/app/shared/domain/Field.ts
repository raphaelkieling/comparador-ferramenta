import { FieldOption } from './FieldOption';

export class Field {
  descriptionEN: string;
  descriptionPT: string;
  type: 'text' | 'select' | 'number';
  options: FieldOption[];
  order: number;

  constructor({ order, options } = { order: 1, options: [] }) {
    this.options = options;
    this.order = order;
  }
}
