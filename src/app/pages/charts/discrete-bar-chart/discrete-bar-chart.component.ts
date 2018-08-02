import * as d3 from 'd3';
import * as nv from 'nvd3';

import { Component, ElementRef, HostBinding, OnInit } from '@angular/core';

import { DiscreteBarChartService } from './discrete-bar-chart.service';

@Component({
  selector: 'app-discrete-bar-chart',
  styleUrls: ['./discrete-bar-chart.component.scss'],
  template: ``,
  providers: [DiscreteBarChartService],
})
export class DiscreteBarChartComponent implements OnInit {
  @HostBinding('class.discrete-bar-chart__container') private readonly discreteBarChartContainer = true;

  constructor(
    private discreteBarChartService: DiscreteBarChartService,
    private el: ElementRef,
  ) { }

  public ngOnInit() {
    const container = d3.select(this.el.nativeElement);
    if (container[0][0]) {
      const colors = [
        '#7726d3',
        '#ff5252',
        '#ffc107',
        '#00bcd4',
        '#00d45a',
        '#51a8f9',
        '#ff1bb9',
      ];
      const data = [{
        key: 'Cumulative Return',
        values: this.discreteBarChartService.getCumulativeReturn(),
      }];
      nv.addGraph(() => {
        const chart = (
          nv.models.discreteBarChart()
            .x(d => d.label)
            .y(d => d.value)
            .yDomain([-12, 37])
            .color(colors)
            .margin({ left: 40, right: 30, top: 10, bottom: 10 })
            .showValues(true) as any
        )
          .showLegend(false)
          .rectClass('bar');

        chart.tooltip.enabled(true)
          .hideDelay(0)
          .headerEnabled(false)
          .contentGenerator((d) => {
            if (d === null) {
              return '';
            }
            d3.selectAll('.nvtooltip').classed('mdl-tooltip', true);
            return d.data.label;
          });

        chart.yAxis
          .showMaxMin(false)
          .ticks(10)
        ;

        container.append('svg')
          .datum(data)
          .transition().duration(1200)
          .call(chart);

        nv.utils.windowResize(chart.update);

        const color = d3.scale.ordinal().range(colors);
        const legend = container.append('div')
          .attr('class', 'legend')
          .selectAll('.legend__item')
          .data(data[0].values)
          .enter()
          .append('div')
          .attr('class', 'legend__item');

        legend.append('div')
          .attr('class', 'legend__mark pull-left')
          .style('background-color', (d => color(d.label)) as any);

        legend.append('div')
          .attr('class', 'legend__text')
          .text(d => d.label);

        return chart;
      });
    }
  }
}
