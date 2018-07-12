import { Injectable } from '@angular/core';

@Injectable()
export class StackedBarChartService {
  private testFunction(x, k) {
    return Math.round(((Math.random() * 0.15 + 1.15) * (200 - 2 * x) * k) * 1000 / x);
  }

  public *getTestGraph(k) {
    yield* Array(26).fill(undefined)
      .map((_, i) => 65 + i)
      .map(code => ({
        x: String.fromCharCode(code),
        y: this.testFunction(code, k),
      }));
  }
}
