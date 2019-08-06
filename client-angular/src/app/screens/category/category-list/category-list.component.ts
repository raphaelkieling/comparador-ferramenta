import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from 'src/app/shared/domain/Category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  list: Category[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.findAll<Category[]>().subscribe(({ data }: any) => {
      this.list = data;
    })
  }

}
