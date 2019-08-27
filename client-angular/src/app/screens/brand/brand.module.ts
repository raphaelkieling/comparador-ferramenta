import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandComponent } from './brand.component';
import { BrandListComponent } from './brand-list/brand-list.component';
import { BrandSaveComponent } from './brand-save/brand-save.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/shared/material.module';
import { FlexModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';
import { BrandService } from './brand.service';



@NgModule({
  declarations: [BrandComponent, BrandListComponent, BrandSaveComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FlexModule,
    FormsModule,
    ImageCropperModule,
    ReactiveFormsModule
  ],
  providers: [BrandService]
})
export class BrandModule { }
