import { Injectable } from '@angular/core';

@Injectable()
export class LineChartService {
  private awesomeFunction(x) {
    const INTERVAL_1 = 2.8;
    const INTERVAL_2 = 7.1;
    const INTERVAL_3 = 11.0;

    if (x < INTERVAL_1) {
      return (3.43 * x * x - 6.7 * x) / 14;
    }
    if (x < INTERVAL_2) {
      return -(x - 7.1) * (x - 7.1) / 10.26 + 2.378;
    }
    if (x < INTERVAL_3) {
      return -0.4 / (x - 4.3) + 2.53;
    }
    return ((x - 11.4) * (x - 11.4) * (x - 11.4)) / 13 + 2.476;
  }

  private goodFunction(x) {
    const INTERVAL_1 = 3.0;
    const INTERVAL_2 = 8.2;

    if (x < INTERVAL_1) {
      return (3.255 * x * x - 9.6 * x) / 16;
    }
    if (x < INTERVAL_2) {
      return (-1.055 * (x - 8.03) * (x - 8.03) + 27) / 15;
    }
    return ((x - 9) * (x - 9) * (x - 9)) / 120 + 1.805;
  }

  private failFunction(x) {
    const INTERVAL_1 = 3.1;
    const INTERVAL_2 = 10.3;

    if (x < INTERVAL_1) {
      return (2.255 * x * x - 9.1 * x) / 13;
    }
    if (x < INTERVAL_2) {
      return .82 * Math.sin((x - 4.5) / 2.1);
    }
    return -(x - 13) * (x - 13) * (x - 13) / 64;
  }

  public *getAwesomeGraph(from, to, step) {
    let x = from;
    do {
      yield ({ x, y: this.awesomeFunction(x) });
    } while ((x += step) < to);
  }

  public *getGoodGraph(from, to, step) {
    let x = from;
    do {
      yield ({ x, y: this.goodFunction(x) });
    } while ((x += step) < to);
  }

  public *getFailGraph(from, to, step) {
    let x = from;
    do {
      yield ({ x, y: this.failFunction(x) });
    } while ((x += step) < to);
  }
}
