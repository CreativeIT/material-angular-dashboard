import * as d3 from 'd3';
import * as nv from 'nvd3';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browser-statistics-chart',
  styleUrls: ['./browser-statistics-chart.component.scss'],
  templateUrl: './browser-statistics-chart.component.html',
})
export class BrowserStatisticsChartComponent implements OnInit {
  public ngOnInit() {
    const COLORS = {
      red: '#f44336',
      lightBlue: '#03a9f4',
      orange: '#ffc107',
      amber: '#ff9800',
      teal: '#00bcd4',
      purple: '#7726d3',
      green: '#00d45a',
      rowBgColor: '#4a4a4a',
    };

    const container1 = d3.select('.chart1__container');
    if (container1[0][0]) {
      const colors = [
        COLORS.purple,
        COLORS.red,
        COLORS.orange,
        COLORS.teal,
        COLORS.lightBlue,
      ];

      const data = [
        {
          key: 'Chrome',
          y: 42,
        },
        {
          key: 'Opera',
          y: 13,
        },
        {
          key: 'Safari',
          y: 14,
        },
        {
          key: 'Firefox',
          y: 17,
        },
        {
          key: 'IE & Edge',
          y: 16,
        },
      ];

      nv.addGraph(() => {
        const innerRadius = 0.03;
        let outerRadius = 0.02;

        const pieChart = nv.models.pieChart()
          .x(d => d.key)
          .y(d => d.y)
          .showLabels(false)
          .donut(true)
          .growOnHover(true)
          .padAngle(.03)
          .margin({ left: -10, right: -10, top: -10, bottom: -10 })
          .color(colors)
          .arcsRadius([{ inner: innerRadius, outer: outerRadius },
            { inner: innerRadius, outer: outerRadius },
            { inner: innerRadius, outer: outerRadius },
            { inner: innerRadius, outer: outerRadius },
            { inner: innerRadius, outer: outerRadius },
          ])
          .showLegend(false)
          .titleOffset(10);

        pieChart.tooltip.enabled(false);

        container1.append('div')
          .append('svg')
          .datum(data)
          .transition().duration(1200)
          .call(pieChart);

        const h = 0;
        let i = 0.35;
        const timer = setInterval(animatePie, 70);

        function animatePie() {
          if (outerRadius < 1.02) {
            pieChart.arcsRadius([{ inner: innerRadius, outer: outerRadius },
              { inner: innerRadius, outer: outerRadius },
              { inner: innerRadius, outer: outerRadius },
              { inner: innerRadius, outer: outerRadius },
              { inner: innerRadius, outer: outerRadius },
            ]).update();
            outerRadius += i;
            if (i > 0.2) {
              i -= 0.05;
            }
          } else {
            outerRadius = 1.02;
            pieChart.arcsRadius([{ inner: innerRadius, outer: outerRadius },
              { inner: innerRadius, outer: outerRadius },
              { inner: innerRadius, outer: outerRadius },
              { inner: innerRadius, outer: outerRadius },
              { inner: innerRadius, outer: outerRadius },
            ])
              .showLabels(true)
              .labelType('percent')
              .update();
            clearInterval(timer);
          }
        }

        const color = d3.scale.ordinal().range(colors);

        const legend = container1.append('div')
          .attr('class', 'legend')
          .selectAll('.legend__item')
          .data(data)
          .enter()
          .append('div')
          .attr('class', 'legend__item');

        legend.append('div')
          .attr('class', 'legend__mark pull-left')
          .style('background-color', (d => color(d.key)) as any);

        legend.append('div')
          .attr('class', 'legend__text')
          .text(d => d.key);

        return pieChart;
      });
    }
  }
}
