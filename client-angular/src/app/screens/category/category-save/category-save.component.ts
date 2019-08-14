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
import { MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { environment } from 'src/environments/environment';

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
  form: FormGroup;
  fileChanged = false;

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private active: ActivatedRoute,
    private snack: MatSnackBar,
    private fb: FormBuilder
  ) {
    this.data.forms = [new Form()];
  }

  ngOnInit() {
    const id = this.active.snapshot.queryParamMap.get('id');

    if (!id) { return; }

    this.categoryService.findOne(id).subscribe((data: Category) => {
      this.data = data;
    }, err => {
      this.snack.open('Category not found');
      this.back();
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
    this.fileChanged = true;
  }

  resetDropzone() {
    this.dropzone.reset();
    this.fileChanged = false;
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

  async beforeSave(): Promise<boolean> {
    return true;
  }

  async save() {
    const canSave: boolean = await this.beforeSave();

    if (false === canSave) { return; }

    if (this.data.id) {
      try {
        this.categoryService.update(this.data.id, this.data).toPromise();
        const file = new FormData();
        file.append('file', this.file);
        try {
          await this.categoryService.upload(this.data.id, file).toPromise();
        } catch (err) {
          this.snack.open('An error ocurred on upload the image!', '', { duration: 2000 });
          return;
        }
      } catch (err) {
        this.snack.open('An error ocurred on update the category!', '', { duration: 2000 });
        return;
      }
    } else {
      try {
        const { data: categorySaved } = await this.categoryService.save(this.data).toPromise();
        const file = new FormData();
        file.append('file', this.file);

        try {
          await this.categoryService.upload(categorySaved.id, file).toPromise();
        } catch (err) {
          this.snack.open('An error ocurred on upload the image!', '', { duration: 2000 });
          return;
        }
      } catch (err) {
        this.snack.open('An error ocurred on save the category!', '', { duration: 2000 });
        return;
      }

    }




    this.snack.open('Save on save!', '', { duration: 2000 })
    this.back();
  }

  back() {
    this.router.navigate(['/admin', 'category'])
  }
}
