import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/service/base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService {

  constructor(httpClient: HttpClient) {
    super(httpClient, 'category');
  }
}
