import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Category } from 'src/app/shared/domain/Category';
import { Form } from 'src/app/shared/domain/Form';
import { ShortcutInput, ShortcutEventOutput } from 'ng-keyboard-shortcuts';
import { Group } from 'src/app/shared/domain/Group';
import { Field } from 'src/app/shared/domain/Field';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FieldOption } from 'src/app/shared/domain/FieldOption';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-save',
  templateUrl: './category-save.component.html',
  styleUrls: ['./category-save.component.scss']
})
export class CategorySaveComponent implements AfterViewInit {
  data: Category = new Category();
  shortcuts: ShortcutInput[] = [];

  constructor(
    private categoryService: CategoryService
  ) {
    this.data.forms = [new Form()];
    console.log(this.data)
  }

  ngAfterViewInit(): void {
    this.shortcuts.push({
      key: 'shift + alt + c',
      command: (output: ShortcutEventOutput) => this.addGroup(),
      preventDefault: true
    });
  }

  addGroup(): void {
    const group: Group = new Group();
    this.data.forms[0].groups.push(group);
  }

  addField(group: Group): void {
    const field: Field = new Field();
    group.fields.push(field);
  }

  addOption(field: Field): void {
    const option: FieldOption = new FieldOption();
    field.options.push(option);
  }

  removeField(group: Group): void {
    if (!this.data.forms[0]) return;

    this.data.forms[0].groups = this.data.forms[0].groups.filter(item => group !== item);
  }

  dropGroup(form: Form, event: CdkDragDrop<string[]>) {
    moveItemInArray(form.groups, event.previousIndex, event.currentIndex)
  }

  dropField(group: Group, event: CdkDragDrop<string[]>) {
    moveItemInArray(group.fields, event.previousIndex, event.currentIndex)
  }

  dropOptions(field: Field, event: CdkDragDrop<string[]>) {
    moveItemInArray(field.options, event.previousIndex, event.currentIndex)
  }

  save() {
    this.categoryService.save(this.data).subscribe(console.log)
  }
}
