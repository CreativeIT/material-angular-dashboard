import * as d3 from 'd3';
import * as nv from 'nvd3';

import { Directive, OnInit, ElementRef } from '@angular/core';

import { BaseLineChartDirective } from 'theme/directives/line-chart.directive';

import { LineChartService } from './line-chart.service';

@Directive({
  selector: '[appLineChart]',
})
export class LineChartDirective extends BaseLineChartDirective {
  constructor(
    el: ElementRef,
    private lineChartService: LineChartService,
  ) {
    super(el);

    this.xAxis = 'TIME';
    this.yAxis = 'REVENUE';
    this.maxX = 14;

    this.afterConfigure();

    this.animatedData = [
      {
        values: [],
        key: 'Awesome',
        color: 'rgb(80, 150, 215)',
      },
      {
        values: [],
        key: 'Good',
        fillOpacity: 0.00001,
        area: true,
        color: 'rgb(0, 188, 212)',
      },
      {
        values: [],
        key: 'Fail',
        color: 'rgb(255, 82, 82)',
      },
    ];
    this.rawData = [
      lineChartService.getAwesomeGraph,
      lineChartService.getGoodGraph,
      lineChartService.getFailGraph,
    ]
      .map(f => f.bind(lineChartService))
      .map(f => [...f(0, this.maxX + 1, this.xStep)]);
  }
}
