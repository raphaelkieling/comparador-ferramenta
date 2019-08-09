import { Injectable } from '@angular/core';
import { BaseService, IAppResponse } from 'src/app/shared/service/base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from 'src/app/shared/domain/Image';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService {

  constructor(httpClient: HttpClient) {
    super(httpClient, 'category');
  }

  upload(id: number, file: FormData): Observable<IAppResponse<Image>> {
    return this.httpClient
      .post<IAppResponse<Image>>(`${this.baseUrlApi}/${this.name}/${id}/upload`, file)
  }
}
