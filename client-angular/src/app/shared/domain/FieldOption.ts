export class FieldOption {
  descriptionEN: string;
  descriptionPT: string;
  order: number;

  constructor({ order } = { order: 1 }) {
    this.order = order;
  }
}
