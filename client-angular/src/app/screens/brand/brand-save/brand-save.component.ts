import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/shared/domain/Brand';
import { BrandService } from '../brand.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Constants } from 'src/app/constants';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-brand-save',
  templateUrl: './brand-save.component.html',
  styleUrls: ['./brand-save.component.scss']
})
export class BrandSaveComponent implements OnInit {
  form: FormGroup;
  loading = false;
  id?: number = null;

  constructor(
    private brandService: BrandService,
    private router: Router,
    private active: ActivatedRoute,
    private snack: MatSnackBar,
    private builder: FormBuilder
  ) {
    this.form = this.builder.group({
      description: ['', Validators.compose([Validators.required, Validators.maxLength(50)])]
    })
  }

  ngOnInit() {
    this.id = +this.active.snapshot.queryParamMap.get('id');

    if (!this.id) { return; }

    this.loading = true;
    this.brandService.findOne(this.id).subscribe((data: Brand) => {
      this.form.patchValue(data);
    }, err => {
      this.snack.open('Brand not found', '', { duration: Constants.SNACKBAR_TIME });
    }, () => {
      this.loading = false;
    })
  }

  async beforeSave(): Promise<boolean> {
    console.log(this.form.get('description'));
    return !this.form.invalid;
  }

  async save() {
    const canSave: boolean = await this.beforeSave();

    if (false === canSave) { return; }

    try {
      if (this.id) {
        await this.brandService.update(this.id, this.form.value).toPromise();
      } else {
        await this.brandService.save(this.form.value).toPromise();
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
