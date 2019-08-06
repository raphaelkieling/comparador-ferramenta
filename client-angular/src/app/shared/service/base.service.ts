import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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

  findAll<T>(): Observable<T[]> {
    return this.httpClient.get<T[]>(`${this.baseUrlApi}/${this.name}`);
  }

  findOne<T>(id: any): Observable<T> {
    return this.httpClient.get<T>(`${this.baseUrlApi}/${this.name}/${id}`);
  }

  save<T>(data: T): Observable<T> {
    return this.httpClient.post<T>(`${this.baseUrlApi}/${this.name}`, data);
  }

  update<T>(id: any, data: T): Observable<T> {
    return this.httpClient.put<T>(`${this.baseUrlApi}/${this.name}/${id}`, data);
  }

  delete(id: any): Observable<Boolean> {
    return this.httpClient.delete<Boolean>(`${this.baseUrlApi}/${this.name}/${id}`);
  }
}
