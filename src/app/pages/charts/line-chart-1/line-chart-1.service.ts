import { Injectable } from '@angular/core';

@Injectable()
export class LineChart1Service {
  private firstComplexFunction(x) {
    return Math.cos(x + 10) + 0.5;
  }

  private secondComplexFunction(x) {
    return Math.cos(x) + 1;
  }

  public *getSinGraph(from, to, step) {
    let x = from;
    do {
      yield ({ x, y: Math.sin(x) });
    } while ((x += step) < to);
  }

  public *getFirstComplexGraph(from, to, step) {
    let x = from;
    do {
      yield ({ x, y: this.firstComplexFunction(x) });
    } while ((x += step) < to);
  }

  public *getSecondComplexGraph(from, to, step) {
    let x = from;
    do {
      yield ({ x, y: this.secondComplexFunction(x) });
    } while ((x += step) < to);
  }
}
