import { Component, OnInit } from '@angular/core';
import { removeToken } from 'src/app/utils/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    removeToken();
    this.router.navigate(['/']);
  }
}
