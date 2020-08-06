import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(public authService: AuthService,
              public router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    }
    // Navigate to the login page with extras
    this.router.navigate(['/auth/login']);
    return false;
  }

}
