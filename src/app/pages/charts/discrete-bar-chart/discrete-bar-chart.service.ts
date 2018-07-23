import { Injectable } from '@angular/core';

@Injectable()
export class DiscreteBarChartService {
  public getCumulativeReturn() {
    return [
      {
        label: 'Option 1',
        value: 22,
      },
      {
        label: 'Option 2',
        value: 31,
      },
      {
        label: 'Option 3',
        value: -5,
      },
      {
        label: 'Option 4',
        value: 16,
      },
      {
        label: 'Option 5',
        value: 19,
      },
      {
        label: 'Option 6',
        value: 26,
      },
      {
        label: 'Option 7',
        value: 9,
      },
    ];
  }
}
