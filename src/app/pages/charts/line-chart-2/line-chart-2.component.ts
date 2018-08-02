import { Component, ElementRef, OnInit } from '@angular/core';

import { LineChartComponent } from 'theme/components/line-chart';

import { LineChart2Service } from './line-chart-2.service';

@Component({
  selector: 'app-line-chart-2',
  styleUrls: ['../../../../theme/components/line-chart/line-chart.component.scss'],
  template: ``,
  providers: [LineChart2Service],
})
export class LineChart2Component extends LineChartComponent {
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
      lineChart2Service.getTealGraph,
      lineChart2Service.getOrangeGraph,
      lineChart2Service.getGreenGraph,
    ]
      .map(f => f.bind(lineChart2Service))
      .map(f => [...f(0, this.maxX + 1, this.xStep)]);
  }
}
