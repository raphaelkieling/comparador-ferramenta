import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { CategoryService } from './category.service';
import { CategorySaveComponent } from './category-save/category-save.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CategoryComponent, CategorySaveComponent, CategoryListComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    CategoryService
  ]
})
export class CategoryModule { }
