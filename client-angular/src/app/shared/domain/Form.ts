import { Group } from './Group';

export class Form {
  groups: Group[];

  constructor({ groups }: Form = { groups: [] }) {
    this.groups = groups;
  }
}
