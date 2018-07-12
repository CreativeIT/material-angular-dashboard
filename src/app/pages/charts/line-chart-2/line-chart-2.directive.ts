import * as d3 from 'd3';
import * as nv from 'nvd3';

import { Directive, OnInit, ElementRef } from '@angular/core';

import { BaseLineChartDirective } from 'theme/directives/line-chart.directive';

import { LineChart2Service } from './line-chart-2.service';

@Directive({
  selector: '[appLineChart2]',
})
export class LineChart2Directive extends BaseLineChartDirective {
  constructor(
    el: ElementRef,
    private lineChart2Service: LineChart2Service,
  ) {
    super(el);

    this.xAxis = 'X';
    this.yAxis = 'Y';
    this.maxX = 14;

    this.afterConfigure();

    this.animatedData = [
      {
        values: [],
        key: 'Teal graph',
        color: '#00bcd4',
        fillOpacity: 0.00001,
        area: true,
      },
      {
        values: [],
        key: 'Orange graph',
        color: '#ffc107',
        fillOpacity: 0.00001,
        area: true,
      },
      {
        values: [],
        key: 'Green graph',
        color: '#00d45a',
        fillOpacity: 0.00001,
      },
    ];
    this.rawData = [
      [...lineChart2Service.getTealGraph(0, this.maxX + 1, this.xStep)],
      [...lineChart2Service.getOrangeGraph(0, this.maxX + 1, this.xStep)],
      [...lineChart2Service.getGreenGraph(0, this.maxX + 1, this.xStep)],
    ];
  }
}
