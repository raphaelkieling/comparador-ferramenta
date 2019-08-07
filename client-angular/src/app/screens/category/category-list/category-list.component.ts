import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from 'src/app/shared/domain/Category';
import { MatPaginator, MatTableDataSource } from '@angular/material';
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
    private router: Router
  ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;

    this.categoryService.findAll<Category[]>().subscribe(({ data }: any) => {
      this.dataSource.data = data;
    })
  }

  edit(category: Category) {
  }

  create() {
    this.router.navigate(['save'])
  }

}
