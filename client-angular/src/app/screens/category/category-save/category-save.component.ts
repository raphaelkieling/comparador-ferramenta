import { Component, OnInit, AfterViewInit, ViewChild, ViewChildren } from '@angular/core';
import { Category } from 'src/app/shared/domain/Category';
import { Form } from 'src/app/shared/domain/Form';
import { ShortcutInput, ShortcutEventOutput } from 'ng-keyboard-shortcuts';
import { Group } from 'src/app/shared/domain/Group';
import { Field } from 'src/app/shared/domain/Field';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FieldOption } from 'src/app/shared/domain/FieldOption';
import { CategoryService } from '../category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxDropzoneComponent } from 'ngx-dropzone';
import { toBase64 } from 'src/app/utils';
import { Image } from 'src/app/shared/domain/Image';
import { MatSnackBar } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-category-save',
  templateUrl: './category-save.component.html',
  styleUrls: ['./category-save.component.scss']
})
export class CategorySaveComponent implements AfterViewInit, OnInit {
  @ViewChild(NgxDropzoneComponent, { static: true }) dropzone: NgxDropzoneComponent; false

  data: Category = new Category();
  shortcuts: ShortcutInput[] = [];
  file: File;

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private active: ActivatedRoute,
    private snack: MatSnackBar,
    private sanitizer: DomSanitizer
  ) {
    this.data.forms = [new Form()];
  }

  ngOnInit() {
    const id = this.active.snapshot.queryParamMap.get('id');

    if (!id) return;

    this.categoryService.findOne(id).subscribe(({ data }) => {
      this.data = data;
    })
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

  onFilesAdded(files: File[]) {
    this.file = files[0];
  }

  resetDropzone() {
    this.dropzone.reset();
  }

  removeField(group: Group, field: Field): void {
    group.fields = group.fields.filter(item => item !== field);
  }

  removeGroup(group: Group): void {
    if (!this.data.forms[0]) return;
    this.data.forms[0].groups = this.data.forms[0].groups.filter(item => group !== item);
  }

  removeOption(field: Field, option: FieldOption) {
    field.options = field.options.filter(item => item !== option);
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

  async save() {
    if (!(this.file && this.data.image)) {
      this.snack.open('Need a image to continue', 'Ok');
      return;
    }

    this.data.image = new Image();
    this.data.image.base64 = await toBase64(this.file);

    if (this.data.id) {
      this.categoryService.update(this.data.id, this.data).subscribe(console.log)
      return;
    }

    this.categoryService.save(this.data).subscribe(() => {
      this.back();
    });
  }

  back() {
    this.router.navigate(['/admin', 'category'])
  }
}
