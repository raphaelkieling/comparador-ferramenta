import { Group } from './Group';

export class Form {
  groups: Group[];
  order: number;

  constructor({ groups, order }: Form = { groups: [], order: 1 }) {
    this.order = order;
    this.groups = groups;
  }
}
