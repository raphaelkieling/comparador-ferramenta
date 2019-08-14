import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { CategoryService } from './category.service';
import { CategorySaveComponent } from './category-save/category-save.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/shared/material.module';
import { FlexModule } from '@angular/flex-layout';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { KeyboardShortcutsModule } from 'ng-keyboard-shortcuts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  declarations: [CategoryComponent, CategorySaveComponent, CategoryListComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FlexModule,
    NgxDropzoneModule,
    FormsModule,
    KeyboardShortcutsModule,
    ImageCropperModule,
    ReactiveFormsModule
  ],
  providers: [
    CategoryService
  ]
})
export class CategoryModule { }
