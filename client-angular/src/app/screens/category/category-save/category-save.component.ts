import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Category } from 'src/app/shared/domain/Category';
import { Form } from 'src/app/shared/domain/Form';
import { ShortcutInput, ShortcutEventOutput } from 'ng-keyboard-shortcuts';
import { Group } from 'src/app/shared/domain/Group';

@Component({
  selector: 'app-category-save',
  templateUrl: './category-save.component.html',
  styleUrls: ['./category-save.component.scss']
})
export class CategorySaveComponent implements AfterViewInit {
  data: Category = new Category();
  shortcuts: ShortcutInput[] = [];

  constructor() {
    this.data.forms = [new Form()];
  }

  ngAfterViewInit(): void {
    this.shortcuts.push({
      key: 'shift + c',
      command: (output: ShortcutEventOutput) => console.log(output),
      preventDefault: true
    });
  }

  addGroup(): void {
    const group: Group = new Group();
    this.data.forms[0].groups.push(group);
    console.log(this.data.forms[0].groups)
  }
}
