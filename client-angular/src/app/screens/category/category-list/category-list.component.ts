import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from 'src/app/shared/domain/Category';
import { MatPaginator, MatTableDataSource, MatSnackBar, MatSnackBarRef } from '@angular/material';
import { Router } from '@angular/router';
import { Constants } from 'src/app/constants';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'description', 'action'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  dataSource = new MatTableDataSource<Category>();
  loading = false;

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private snack: MatSnackBar
  ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.load();
  }

  load() {
    this.loading = true;
    this.categoryService.findAll().subscribe((data: any) => {
      this.dataSource.data = data;
    }, err => {
      this.snack.open('Problem on get list', 'Ok', { duration: Constants.SNACKBAR_TIME })
    }, () => {
      this.loading = false;
    })
  }

  edit(category: Category) {
    this.router.navigate(['/admin', 'category', 'save'], { queryParams: { id: category.id } });
  }

  delete(category: Category) {
    this.categoryService.delete(category.id).subscribe(() => {
      this.snack.open('Deleted with success', '', { duration: Constants.SNACKBAR_TIME })
      this.load();
    }, err => {
      const snack: MatSnackBarRef<any> = this.snack.open('Problem on delete item', 'Retry', { duration: 4000 });
      snack.onAction().subscribe(() => {
        this.delete(category)
      })

    })
  }

  create() {
    this.router.navigate(['/admin', 'category', 'save'])
  }

}
