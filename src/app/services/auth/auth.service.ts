import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { IUser } from '@models/*';

const tokenName = 'token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private isLogged$ = new BehaviorSubject(false);
  private url = `${environment.apiBaseUrl}`;
  private user;

  constructor(private http: HttpClient) {

  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem(tokenName);
  }

  public login(data): Observable<any> {
    return this.http.post(`${this.url}/login`, data)
      .pipe(
        map((res: { user: any, token: string }) => {
          this.user = res.user;
          localStorage.setItem(tokenName, res.token);
          this.isLogged$.next(true);
          return this.user;
        }),
      );
  }

  public logout() {
    localStorage.clear();
    this.user = null;
    this.isLogged$.next(false);
    return of(false);
  }

  public get authToken(): string {
    return localStorage.getItem(tokenName);
  }

  public get userData(): Observable<any> {
    // send current user or load data from backend using token
    return this.loadUser();
  }

  private loadUser(): Observable<any> {
    // use request to load user data with token
    if (this.isAuthenticated()) {
      return this.http.get(`${this.url}/api/users/current`)
        .pipe(
          tap((user: IUser) => {
            this.user = user;
            this.isLogged$.next(true);
            return this.user;
          }),
        );
    }
    return of(null);
  }
}
