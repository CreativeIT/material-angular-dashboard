import * as d3 from 'd3';
import * as nv from 'nvd3';

import { Component, ElementRef, HostBinding, OnInit } from '@angular/core';

import { LineChartComponent as BaseLineChartComponent } from 'theme/components/line-chart';

import { LineChartService } from './line-chart.service';

@Component({
  selector: 'app-line-chart',
  styleUrls: ['../../../../theme/components/line-chart/line-chart.component.scss'],
  template: ``,
  providers: [LineChartService],
})
export class LineChartComponent extends BaseLineChartComponent {
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
        color: '#00bcd4',
      },
      {
        values: [],
        key: 'Good',
        fillOpacity: 0.00001,
        area: true,
        color: '#ffc107',
      },
      {
        values: [],
        key: 'Fail',
        color: '#f44336',
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
