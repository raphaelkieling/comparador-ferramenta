import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { RouterModule } from '@angular/router';
import { CategoryModule } from '../category/category.module';
import { ProfileModule } from '../profile/profile.module';
import { BrandModule } from '../brand/brand.module';



@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    CategoryModule,
    ProfileModule,
    BrandModule
  ]
})
export class AdminModule { }
