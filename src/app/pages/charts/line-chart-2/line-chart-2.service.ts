import { Injectable } from '@angular/core';

@Injectable()
export class LineChart2Service {
  private tealFunction(x) {
    if (x < 7) {
      return Math.random() * 0.2 * x;
    }
    return (Math.random() * 0.1 + 0.2) * x - 1;
  }

  private orangeFunction(x) {
    if (x < 10) {
      return -Math.random() * 1.5 + 2.5;
    }
    return 1.5;
  }

  private greenFunction(x) {
    if ((x + 1) % 4 === 0) {
      return Math.random() * 1.5 + 0.6;
    }
    return -Math.random() * 0.1 - 0.6;
  }

  public *getTealGraph(from, to, step) {
    let x = from;
    do {
      yield ({ x, y: this.tealFunction(x) });
    } while ((x += step) < to);
  }

  public *getOrangeGraph(from, to, step) {
    let x = from;
    do {
      yield ({ x, y: this.orangeFunction(x) });
    } while ((x += step) < to);
  }

  public *getGreenGraph(from, to, step) {
    let x = from;
    do {
      yield ({ x, y: this.greenFunction(x) });
    } while ((x += step) < to);
  }
}
