import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { GroupComponent } from './group/group.component';
import { MaterialModule } from '../../material.module';

@NgModule({
  declarations: [FormComponent, GroupComponent],
  exports: [FormComponent, GroupComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class FormModule { }
