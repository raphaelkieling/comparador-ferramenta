import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/service/base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mapper } from 'src/app/shared/mappers/mapper';
import { debounce, debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService<any> {

  constructor(httpClient: HttpClient) {
    super(httpClient, 'login', new Mapper());
  }

  auth(username: string, password: string): Observable<any> {
    return this.httpClient.post(`${this.baseUrlApi}/${this.name}`, {
      username,
      password
    });
  }
}
