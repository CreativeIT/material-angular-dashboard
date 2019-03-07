import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs/index';

@Injectable()
export class MapsService {

  public getCountriesPopulation(): Observable<any[]> {
    return of([
      {
        position: { lat: 52.858248, lng: 27.701393 },
        population: '9 491 800',
        area: '207 595',
        name: 'Belarus',
      },
      {
        position: { lat: 16.378309, lng: 101.307704 },
        population: '68 863 514',
        area: '349',
        name: 'Thailand',
      },
      {
        position: { lat: 6.494347, lng: -65.441083 },
        population: '30 761 000',
        area: '916 445',
        name: 'Venezuela',
      },
    ]);
  }

  public getCitiesPopulation(): Observable<any[]> {
    return of([
      {
        position: { lat: 53.677834, lng: 23.829529 },
        population: '365 610',
        area: '142',
        name: 'Grodno',
      },
      {
        position: { lat: 53.902496, lng: 27.561481 },
        population: '1 982 444',
        area: '410',
        name: 'Minsk',
      },
      {
        position: { lat: 13.758945, lng: 100.532646 },
        population: '1 981 690',
        area: '513 120',
        name: 'Bangkok',
      },
      {
        position: { lat: 7.969651, lng: 98.344746 },
        population: '75 573',
        area: '12',
        name: 'Phuket City',
      },
      {
        position: { lat: 10.485846, lng: -66.907196 },
        population: '3 051 000',
        area: '440',
        name: 'Karakas',
      },
      {
        position: { lat: 7.766810, lng: -72.224782 },
        population: '185 917',
        area: '484',
        name: 'San Kristobal',
      },
    ]);
  }

}
