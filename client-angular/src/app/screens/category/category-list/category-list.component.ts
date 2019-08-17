import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from 'src/app/shared/domain/Category';
import { MatPaginator, MatTableDataSource, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'description', 'action'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  dataSource = new MatTableDataSource<Category>();

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
    this.categoryService.findAll().subscribe((data: any) => {
      this.dataSource.data = data;
    }, err => {
      console.log(err)
      this.snack.open('Problem on get list', 'Ok', { duration: 2000 })
    })
  }

  edit(category: Category) {
    this.router.navigate(['/admin', 'category', 'save'], { queryParams: { id: category.id } });
  }

  create() {
    this.router.navigate(['/admin', 'category', 'save'])
  }

}
