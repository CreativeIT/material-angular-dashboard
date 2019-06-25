import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { IInvestigation } from '@models/*';
import { Observable, Subject } from 'rxjs/index';

@Injectable()
export class InvestigationsService {
  private readonly filter = {
    location: '',
    anonymous: '',
    type: '',
    period: '',
  };
  public filterValue$ = new Subject();

  constructor(private http: HttpClient) {
  }

  private get url(): string {
    return `${environment.apiUrl}/api`;
  }

  public getInvestigations(filters: object): Observable<{ investigations: IInvestigation[], pages: number }> {
    const params = '?' + Object.keys(filters)
      .map(key => (filters[key] !== '') ? key + '=' + filters[key] : null)
      .filter(param => param)
      .join('&');
    return this.http.get<{ investigations: IInvestigation[], pages: number }>(`${this.url}/investigations/${params}`);
  }

  public filterValue() {
    return this.filterValue$.asObservable();
  }

  public createInvestigation(investigation: IInvestigation): Observable<IInvestigation> {
    return this.http.post<IInvestigation>(`${this.url}/investigations`, investigation);
  }

  public getInvestigation(id: IInvestigation['id']): Observable<IInvestigation> {
    return this.http.get<IInvestigation>(`${this.url}/investigations/${id}`);
  }

  public updateInvestigation(id: IInvestigation['id'], investigation: IInvestigation): Observable<IInvestigation> {
    return this.http.put<IInvestigation>(`${this.url}/investigations/${id}`, investigation);
  }
}
