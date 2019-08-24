import { Injectable } from '@angular/core';
import { BaseService, IAppResponse } from 'src/app/shared/service/base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryMapper } from 'src/app/shared/mappers/categoryMapper';
import { Category } from 'src/app/shared/domain/Category';
import { Midia } from 'src/app/shared/domain/Midia';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService<Category> {

  constructor(httpClient: HttpClient) {
    super(httpClient, 'category', new CategoryMapper());
  }

  upload(id: number, file: FormData): Observable<IAppResponse<Midia>> {
    return this.httpClient
      .post<IAppResponse<Midia>>(`${this.baseUrlApi}/${this.name}/${id}/upload`, file)
  }
}
