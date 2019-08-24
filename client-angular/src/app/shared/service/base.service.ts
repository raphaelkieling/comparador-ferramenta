import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mapper } from '../mappers/mapper';
import { map } from 'rxjs/operators';

export interface IAppResponse<T> {
  data: T;
}

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {
  protected name: string;
  protected baseUrlApi: string;
  protected mapper: Mapper<T>;

  constructor(protected httpClient: HttpClient, name: string, mapper: Mapper<T>) {
    this.baseUrlApi = `${environment.baseUrlApi}/api`;
    this.name = name;
    this.mapper = mapper;
  }

  findAll<T>(): Observable<any[]> {
    return this.httpClient
      .get<IAppResponse<T[]>>(`${this.baseUrlApi}/${this.name}`)
      .pipe(
        map((x) => this.mapper.fromSourceList(x.data))
      )
  }

  findOne<T>(id: any): Observable<T> {
    return this.httpClient
      .get<IAppResponse<T>>(`${this.baseUrlApi}/${this.name}/${id}`)
      .pipe(
        map((x) => this.mapper.fromSource(x.data))
      )
  }

  save<T>(data: T): Observable<IAppResponse<T>> {
    return this.httpClient
      .post<IAppResponse<T>>(`${this.baseUrlApi}/${this.name}`, data)
  }

  update<T>(id: any, data: T): Observable<IAppResponse<T>> {
    return this.httpClient
      .put<IAppResponse<T>>(`${this.baseUrlApi}/${this.name}/${id}`, data)
  }

  delete(id: any): Observable<IAppResponse<boolean>> {
    return this.httpClient
      .delete<IAppResponse<boolean>>(`${this.baseUrlApi}/${this.name}/${id}`);
  }
}
