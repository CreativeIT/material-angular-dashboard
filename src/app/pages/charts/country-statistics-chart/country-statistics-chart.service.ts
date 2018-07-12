import { Injectable } from '@angular/core';

@Injectable()
export class CountryStatisticsChartService {
  public getCountryStatistics() {
    return [
      {
        key: 'United States',
        y: 31,
      },
      {
        key: 'Belarus',
        y: 26,
      },
      {
        key: 'Italy',
        y: 18,
      },
      {
        key: 'France',
        y: 15,
      },
      {
        key: 'Other',
        y: 10,
      },
    ];
  }
}
