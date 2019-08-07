import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatSidenavModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatTableModule, MatSelectModule, MatOptionModule, MatIconModule, MatPaginatorModule } from '@angular/material'
import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSelectModule,
    MatOptionModule,
    DragDropModule,
    MatIconModule,
    MatPaginatorModule
  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSelectModule,
    MatOptionModule,
    DragDropModule,
    MatIconModule,
    MatPaginatorModule
  ]
})
export class MaterialModule { }
