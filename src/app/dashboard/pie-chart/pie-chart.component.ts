import * as d3 from 'd3';
import * as nv from 'nvd3';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  styleUrls: ['./pie-chart.component.scss'],
  templateUrl: './pie-chart.component.html',
})
export class PieChartComponent implements OnInit {
  public ngOnInit() {
    const colors = [
      'rgba(96, 196, 150, 1)',
      'rgba(80, 150, 215, 1)',
      'rgba(0, 188, 212, 1)',
      'rgba(116, 199, 209, 1)',
      'rgba(255, 82, 82, 1)',
      'rgba(0, 0, 0, 0)'
    ];

    const data = [
      {
        key: 'Coding',
        y: 0,
        end: 9
      },
      {
        key: 'Eating',
        y: 0,
        end: 3
      },
      {
        key: 'Sleeping',
        y: 0,
        end: 3
      },
      {
        key: 'Meditation',
        y: 0,
        end: 3
      },
      {
        key: 'The fight against evil',
        y: 0,
        end: 6
      }
      ,
      {
        key: 'Pending',
        y: 23.9
      }
    ];

    nv.addGraph(() => {
      const innerRadius = 0.86;
      const outerRadius = 1.02;

      const pieChart = nv.models.pieChart()
        .x((d) => d.key)
        .y((d) => d.y)
        .showLabels(false)
        .donut(true)
        .growOnHover(true)
        .padAngle(.04)
        .cornerRadius(0)
        .margin({ left: -10, right: -10, top: -10, bottom: -10 })
        .color(colors)
        .arcsRadius([{ inner: innerRadius, outer: outerRadius },
            { inner: innerRadius, outer: outerRadius },
            { inner: innerRadius, outer: outerRadius },
            { inner: innerRadius, outer: outerRadius },
            { inner: innerRadius, outer: outerRadius }
        ])
        .showLegend(false)
        .title('0 hours')
        .titleOffset(10);

      pieChart.tooltip.enabled(true)
        .hideDelay(0)
        .headerEnabled(false)
        .contentGenerator((d) => {
          if (d === null) {
              return '';
          }
          d3.selectAll('.nvtooltip').classed('mdl-tooltip', true);
          return `${d.data.y} hours`;
        });

      const container = d3.select('.pie-chart__container')
        .append('div')
        .append('svg')
        .datum(data)
        .transition()
        .duration(1200)
        .call(pieChart as any);

      let h = 0;
      let i = 0;
      const timer = setInterval((_data) => {
        if (i < _data.length - 1) {
          if (_data[i].y < _data[i].end) {
            _data[i].y++;
            _data[_data.length - 1].y--;
            pieChart.title(`${h + 1} hours`);
            h++;
          } else {
            i++;
          }
        } else {
          _data.splice(_data.length - 1, 1);
          clearInterval(timer);
          return;
        }
        if (container[0][0]) {
          pieChart.update();
        } else {
          clearInterval(timer);
        }
      }, 70, data);

      d3.select('.pie-chart__container .nv-pie .nv-pie')
        .append('image')
        .attr('width', '30')
        .attr('height', '30')
        .attr('xlink:href', 'assets/images/watch_white.svg')
        .attr('transform', 'translate(-15,-35)');

      const color = d3.scale.ordinal().range(colors);

      const legend = d3.select('.pie-chart__container')
        .append('div')
        .attr('class', 'legend')
        .selectAll('.legend__item')
        .data(data.slice(0, data.length - 1))
        .enter()
        .append('div')
        .attr('class', 'legend__item');

      legend.append('div')
        .attr('class', 'legend__mark pull-left')
        .style('background-color', (d) => color(d.key).toString());

      legend.append('div')
        .attr('class', 'legend__text')
        .text((d) => d.key);

      return pieChart;
    });
  }
}
