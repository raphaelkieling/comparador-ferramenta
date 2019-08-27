import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/shared/domain/Brand';
import { BrandService } from '../brand.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Constants } from 'src/app/constants';

@Component({
  selector: 'app-brand-save',
  templateUrl: './brand-save.component.html',
  styleUrls: ['./brand-save.component.scss']
})
export class BrandSaveComponent implements OnInit {
  data: Brand = new Brand();
  loading = false;

  constructor(
    private brandService: BrandService,
    private router: Router,
    private active: ActivatedRoute,
    private snack: MatSnackBar
  ) { }

  ngOnInit() {
    const id = this.active.snapshot.queryParamMap.get('id');

    if (!id) { return; }

    this.loading = true;
    this.brandService.findOne(id).subscribe((data: Brand) => {
      this.data = data;
    }, err => {
      this.snack.open('Brand not found', '', { duration: Constants.SNACKBAR_TIME });
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

    try {
      if (this.data.id) {
        await this.brandService.update(this.data.id, this.data).toPromise();
      } else {
        await this.brandService.save(this.data).toPromise();
      }
      this.snack.open('Success on save!', 'ok', { duration: 2000 })
      this.back();
    } catch (err) {
      this.snack.open('Have been a error during save, please try again!', 'ok', { duration: 2000 })
    }
  }

  back() {
    this.router.navigate(['/admin', 'brand'])
  }
}
