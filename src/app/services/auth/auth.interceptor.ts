import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/index';

import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService) {
  }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization token for full api requests
    if (request.url.includes('api') && this.auth.isAuthenticated()) {
      return next.handle(request.clone({
        setHeaders: { Authorization: `Bearer ${this.auth.authToken}` },
      }));
    }
    return next.handle(request);
  }
}
