import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class InvestigationsService {
  public filterValue$ = new Subject();

  constructor(public http: HttpClient) {
  }

  public url = `${environment.apiBaseUrl}/api`;

  public getInvestigations(filters: object): Observable<{ investigations: any[], pages: number }> {
    const params = Object.keys(filters)
      .map(key => (filters[key] !== '') ? `${key}=${filters[key]}` : null)
      .filter(param => param)
      .join('&');
    return this.http.get<{ investigations: any[], pages: number }>(`${this.url}/investigations?${params}`);
  }

  public filterValue() {
    return this.filterValue$.asObservable();
  }

  public getInvestigation(id): Observable<any> {
    return this.http.get(`${this.url}/investigations/${id}`);
  }
}
