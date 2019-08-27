import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBarRef, MatPaginator, MatTableDataSource, MatSnackBar } from '@angular/material';
import { Constants } from 'src/app/constants';
import { Brand } from 'src/app/shared/domain/Brand';
import { BrandService } from '../brand.service';
import { Router } from '@angular/router';
import { CrudList } from 'src/app/shared/crud/crudList';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent extends CrudList<Brand> {
  constructor(
    service: BrandService,
    router: Router,
    snack: MatSnackBar
  ) {
    const displayedColumns = ['id', 'description', 'action'];
    super(service, displayedColumns, 'brand', router, snack);
  }
}
