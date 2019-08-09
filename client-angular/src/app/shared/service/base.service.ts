import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export interface IAppResponse<T> {
  data: T;
}

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {
  protected name: string;
  protected baseUrlApi: string;

  constructor(protected httpClient: HttpClient, name: string) {
    this.baseUrlApi = environment.baseUrlApi;
    this.name = name;
  }

  findAll<T>(): Observable<IAppResponse<T[]>> {
    return this.httpClient
      .get<IAppResponse<T[]>>(`${this.baseUrlApi}/${this.name}`)
  }

  findOne<T>(id: any): Observable<IAppResponse<T>> {
    return this.httpClient
      .get<IAppResponse<T>>(`${this.baseUrlApi}/${this.name}/${id}`)
  }

  save<T>(data: T): Observable<IAppResponse<T>> {
    return this.httpClient
      .post<IAppResponse<T>>(`${this.baseUrlApi}/${this.name}`, data)
  }

  update<T>(id: any, data: T): Observable<IAppResponse<T>> {
    return this.httpClient
      .put<IAppResponse<T>>(`${this.baseUrlApi}/${this.name}/${id}`, data)
  }

  delete(id: any): Observable<IAppResponse<Boolean>> {
    return this.httpClient
      .delete<IAppResponse<Boolean>>(`${this.baseUrlApi}/${this.name}/${id}`)
  }
}
