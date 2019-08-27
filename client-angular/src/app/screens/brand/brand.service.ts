import { Injectable } from '@angular/core';
import { BaseService, IAppResponse } from 'src/app/shared/service/base.service';
import { HttpClient } from '@angular/common/http';
import { BrandMapper } from 'src/app/shared/mappers/brandMapper';
import { Brand } from 'src/app/shared/domain/Brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService extends BaseService<Brand> {

  constructor(httpClient: HttpClient) {
    super(httpClient, 'brand', new BrandMapper());
  }
}
