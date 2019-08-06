import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IAuthResponse } from 'src/app/shared/domain/User';
import { setToken } from 'src/app/utils/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;
  loading = false;

  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private route: Router
  ) {
    this.buildForm();
  }

  ngOnInit() { }

  buildForm() {
    this.loginFormGroup = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  handlerSubmit() {
    this.loading = true;
    const username = this.loginFormGroup.get('username').value;
    const password = this.loginFormGroup.get('password').value;

    this.loginService
      .auth(username, password)
      .subscribe((response: IAuthResponse) => {
        setToken(response.access_token);
        this.route.navigate(['/admin', 'category']);
        this.loading = false;
      })
  }

}
