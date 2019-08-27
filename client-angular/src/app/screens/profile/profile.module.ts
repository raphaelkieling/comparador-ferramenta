import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { FlexModule } from '@angular/flex-layout';



@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexModule
  ]
})
export class ProfileModule { }
