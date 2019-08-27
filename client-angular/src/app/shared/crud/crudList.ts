import { ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSnackBar, MatSnackBarRef } from '@angular/material';
import { BaseService } from '../service/base.service';
import { Router } from '@angular/router';
import { Constants } from 'src/app/constants';
import { Base } from '../domain/Base';

export class CrudList<T> {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  dataSource = new MatTableDataSource<T>();
  loading = false;

  constructor(
    private service: BaseService<T>,
    private displayedColumns: string[] = [],
    private routeName: string,
    private router: Router,
    private snack: MatSnackBar,
  ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.load();
  }

  load() {
    this.loading = true;
    this.service.findAll().subscribe((data: any) => {
      this.dataSource.data = data;
    }, err => {
      this.snack.open('Problem on get list', 'Ok', { duration: Constants.SNACKBAR_TIME })
    }, () => {
      this.loading = false;
    })
  }

  edit(data: Base) {
    this.router.navigate(['/admin', this.routeName, 'save'], { queryParams: { id: data.id } });
  }

  delete(data: Base) {
    this.service.delete(data.id).subscribe(() => {
      this.snack.open('Deleted with success', '', { duration: Constants.SNACKBAR_TIME })
      this.load();
    }, err => {
      const snack: MatSnackBarRef<any> = this.snack.open('Problem on delete item', 'Retry', { duration: 4000 });
      snack.onAction().subscribe(() => {
        this.delete(data);
      });
    });
  }

  create() {
    this.router.navigate(['/admin', this.routeName, 'save']);
  }
}
