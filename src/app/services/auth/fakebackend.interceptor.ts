import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, dematerialize, materialize, mergeMap } from 'rxjs/operators';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  private username = 'Luke';
  private email = 'Luke@skywalker.com';

  constructor() { }

  // with real backend you don't need it at all
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return of(null).pipe(mergeMap(() => {

      // signup
      if (request.url.endsWith('/api/auth/signup') && request.method === 'POST') {
        const body = {
          token: 'token_' + this.makeID(),
          user: {
            username: request.body['username'],
            email: request.body['email'],
          },
        };

        return of(new HttpResponse({ body, status: 200 }));
      }

      // login
      if (request.url.endsWith('/api/auth/login') && request.method === 'POST') {
        const body = {
          token: 'token_' + this.makeID(),
          user: {
            username: this.username,
            email: request.body['email'],
          },
        };

        return of(new HttpResponse({ body, status: 200 }));
      }

      // logout
      if (request.url.endsWith('/api/auth/logout') && request.method === 'GET') {
        return of(new HttpResponse({ body: { success: true }, status: 200 }));
      }

      // at default just process the request
      return next.handle(request);
    }))
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());
  }

  // generate random token
  private makeID(): string {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 25; i = i + 1) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
}
