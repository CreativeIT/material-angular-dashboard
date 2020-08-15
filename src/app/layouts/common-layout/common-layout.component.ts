import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-common-layout',
  templateUrl: './common-layout.component.html',
})
export class CommonLayoutComponent implements OnInit {

  public user;

  constructor(public authService: AuthService,
              public router: Router) {}

  public ngOnInit() {
    this.authService.userData.subscribe(user => this.user = user);
  }

  public logout() {
    this.authService.logout()
      .subscribe(res => this.router.navigate(['/auth/login']));
  }
}
