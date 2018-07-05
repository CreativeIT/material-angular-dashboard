import * as d3 from 'd3';
import * as nv from 'nvd3';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discrete-bar-chart',
  styleUrls: ['./discrete-bar-chart.component.scss'],
  templateUrl: './discrete-bar-chart.component.html',
})
export class DiscreteBarChartComponent implements OnInit {
  public ngOnInit() {
    const container = d3.select('.discrete-bar-chart__container');
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
        values: [
          {
            label: 'Option 1',
            value: 22,
          },
          {
            label: 'Option 2',
            value: 31,
          },
          {
            label: 'Option 3',
            value: -5,
          },
          {
            label: 'Option 4',
            value: 16,
          },
          {
            label: 'Option 5',
            value: 19,
          },
          {
            label: 'Option 6',
            value: 26,
          },
          {
            label: 'Option 7',
            value: 9,
          },
        ],
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
