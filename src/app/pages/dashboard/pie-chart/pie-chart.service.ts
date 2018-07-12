import { Injectable } from '@angular/core';

@Injectable()
export class PieChartService {
  public getDaySchedule() {
    return [
      {
        key: 'Coding',
        hours: 9,
      },
      {
        key: 'Eating',
        hours: 3,
      },
      {
        key: 'Sleeping',
        hours: 3,
      },
      {
        key: 'Meditation',
        hours: 3,
      },
      {
        key: 'The fight against evil',
        hours: 6,
      },
    ];
  }
}
