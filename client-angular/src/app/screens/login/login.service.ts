import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/service/base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {

  constructor(httpClient: HttpClient) {
    super(httpClient, 'login');
  }

  auth(username: string, password: string): Observable<any> {
    return this.httpClient.post(`${this.baseUrlApi}/${this.name}`, {
      username,
      password
    })
  }
}
