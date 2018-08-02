import * as d3 from 'd3';
import * as nv from 'nvd3';

import { Component, ElementRef, HostBinding, OnInit } from '@angular/core';

import { StackedBarChartService } from './stacked-bar-chart.service';

@Component({
  selector: 'app-stacked-bar-chart',
  styleUrls: ['./stacked-bar-chart.component.scss'],
  template: ``,
  providers: [StackedBarChartService],
})
export class StackedBarChartComponent implements OnInit {
  @HostBinding('class.stacked-bar-chart__container') private readonly stackedBarChartContainer = true;

  constructor(
    private stackedBarChartService: StackedBarChartService,
    private el: ElementRef,
  ) { }

  public ngOnInit() {
    const container = d3.select(this.el.nativeElement);

    if (container[0][0]) {
      const data = [1.2, 1, 1.1]
        .map(k => [...this.stackedBarChartService.getTestGraph(k)])
        .map((values, i) => ({
          ...[
            {
              key: 'Book1',
              color: '#00bcd4',
            },
            {
              key: 'Book2',
              color: '#ffc107',
            },
            {
              key: 'Book3',
              color: '#ff5252',
            },
          ][i],
          values,
        }));

      nv.addGraph(() => {
        const chart = nv.models.multiBarChart()
          .margin({ top: 60, right: 20, bottom: 22, left: 50 })
          .reduceXTicks(true)
          .rotateLabels(0)
          .showControls(true)
          .groupSpacing(0.3)
          .stacked(true);

        chart.xAxis
          .showMaxMin(false)
          .tickSize(10)
          .ticks(10);

        chart.legend
          .margin({ top: 2, bottom: 10 });

        chart.controls
          .margin({ top: 2, right: 0, bottom: 10, left: -18 })
          .color(['#FF0000', '#00FF00']);

        chart.yAxis
          .showMaxMin(false)
          .tickFormat(d3.format(',f'));

        chart.tooltip
          .contentGenerator((d) => {
            if (d === null) {
              return '';
            }
            d3.selectAll('.nvtooltip').classed('mdl-tooltip', true);
            if (d.hasOwnProperty('point')) {
              return d3.time.format('%x')(new Date(d.value)) + '<br>Price: $' + d.series[0].value;
            }
            return d.series[0].key + '<br>' + d.value + '<br>' + d.series[0].value;
          });

        container.append('svg')
          .datum(data)
          .call(chart);

        nv.utils.windowResize(chart.update);

        return chart;
      });

    }
  }
}
