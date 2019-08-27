import { BaseService } from '../service/base.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Constants } from 'src/app/constants';
import { Base } from '../domain/Base';

export class CrudSave<T> {
  loading: boolean;

  constructor(
    private data: Base,
    private routerName: string,
    private service: BaseService<T>,
    private router: Router,
    private active: ActivatedRoute,
    private snack: MatSnackBar
  ) {
    this.loading = false;
  }

  ngOnInit() {
    const id = this.active.snapshot.queryParamMap.get('id');

    if (!id) { return; }

    this.loading = true;
    this.service.findOne(id).subscribe((data: T) => {
      this.data = data;
    }, err => {
      this.snack.open('Object not found', '', { duration: Constants.SNACKBAR_TIME });
      this.back();
    }, () => {
      this.loading = false;
    })
  }

  async beforeSave(): Promise<boolean> {
    return true;
  }

  async save() {
    const canSave: boolean = await this.beforeSave();

    if (false === canSave) { return; }

    if (this.data.id) {
      await this.service.update(this.data.id, this.data).toPromise();
    } else {
      await this.service.save(this.data).toPromise();
    }

    this.snack.open('Success on save!', 'ok', { duration: 2000 })
    this.back();
  }

  back() {
    this.router.navigate(['/admin', this.routerName]);
  }
}
