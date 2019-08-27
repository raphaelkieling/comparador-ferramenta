import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatTableModule,
  MatSelectModule,
  MatOptionModule,
  MatIconModule,
  MatPaginatorModule,
  MatSnackBarModule,
  MatMenuModule,
  MatListModule,
  MatDividerModule
} from '@angular/material'
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



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
    MatPaginatorModule,
    MatSnackBarModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatDividerModule
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
    MatPaginatorModule,
    MatSnackBarModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatDividerModule
  ]
})
export class MaterialModule { }
