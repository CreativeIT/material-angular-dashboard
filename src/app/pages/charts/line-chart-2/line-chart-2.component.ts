import * as d3 from 'd3';
import * as nv from 'nvd3';

import { Component, OnInit } from '@angular/core';

// TODO: remove this
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

@Component({
  selector: 'app-line-chart-2',
  styleUrls: ['./line-chart-2.component.scss'],
  templateUrl: './line-chart-2.component.html',
})
export class LineChart2Component implements OnInit {
  private data;
  private container;
  private svg;
  private svgHeight;
  private svgWidth;
  private barsLayout;
  private lineChart;
  private timer;
  private maxX = 14;
  private columns = this.maxX / 2;
  private xStep = 0.125;
  private xDrawStep = 4;
  private rowBgColor = COLORS.rowBgColor;
  private margin = 20;
  private durationResizeAnimation = 500;
  private drawStep = this.xStep * this.xDrawStep;
  private animationTime = 400;
  private xAxis = 'X';
  private yAxis = 'Y';

  public ngOnInit() {
    this.container = d3.select('.line-chart-2__container');
    this.data = [
      {
        values: [],
        key: 'Teal graph',
        color: COLORS.teal,
        fillOpacity: 0.00001,
        area: true,

        graphFunction(i) {
          if (i < 7) {
            this.values.push({ x: i, y: Math.random() * 0.2 * i });
          } else {
            this.values.push({ x: i, y: ((Math.random() * 0.1 + 0.2) * i - 1) });
          }
        },
      },
      {
        values: [],
        key: 'Orange graph',
        color: COLORS.orange,
        fillOpacity: 0.00001,
        area: true,

        graphFunction(i) {
          if (i < 10) {
            this.values.push({ x: i, y: -Math.random() * 1.5 + 2.5 });
          } else {
            this.values.push({ x: i, y: 1.5 });
          }
        },
      },
      {
        values: [],
        key: 'Green graph',
        color: COLORS.green,
        fillOpacity: 0.00001,

        graphFunction(i) {
          if ((i + 1) % 4 === 0) {
            this.values.push({ x: i, y:  Math.random() * 1.5 + 0.6 });
          }
          if ((i + 1) % 2 > 0) {
            this.values.push({ x: i, y: -Math.random() * 0.1 - 0.6 });
          }
        },
      },
    ];

    if (this.container[0][0]) {
      this.drawChart();
    }
  }

  private addSvgContainer() {
    this.svg = this.container.append('div').append('svg');
  }

  private getSvgSizes() {
    const svgWidth = getComputedStyle(this.svg[0][0]).width;
    const svgHeight = getComputedStyle(this.svg[0][0]).height;
    this.svgWidth = svgWidth.slice(0, svgWidth.length - 2);
    this.svgHeight = +svgHeight.slice(0, svgHeight.length - 2) - this.margin;
  }

  private addAxisLabels() {
    this.container.selectAll('svg .y-axis-label').remove();
    this.container.select('svg')
      .append('text')
      .attr('class', 'y-axis-label')
      .attr('x', -(23 + this.yAxis.length * 7))
      .attr('y', '12')
      .attr('transform', 'rotate(-90)')
      .text(this.yAxis || '');

    this.container.select('svg')
      .append('text')
      .attr('class', 'x-axis-label')
      .text(this.xAxis || '');
  }

  private buildBackground() {
    this.addSvgContainer();
    this.getSvgSizes();

    const bars = Array(this.columns).fill(this.svgHeight);

    this.barsLayout = this.svg.append('g')
      .attr('class', 'bars')
      .attr('transform', 'translate(' + this.margin + ', 0)')
      .selectAll('rect')
      .data(bars)
      .enter()
      .append('rect');

    this.addAxisLabels();

    this.setBackgroundSizes();
  }

  private setBackgroundSizes() {
    const availableBarWidth = (this.svgWidth - 2 * this.margin) / this.columns;
    const barWidth = availableBarWidth / 2;
    this.barsLayout
      .attr('fill', '#4a4a4a')
      .attr('y', this.margin)
      .attr('height', (d, i) => d)
      .transition().duration(this.durationResizeAnimation)
      .attr('width', barWidth)
      .attr('x', (d, i) => i * availableBarWidth);
    this.container.select('svg .x-axis-label')
      .transition().duration(this.durationResizeAnimation)
      .attr('x', this.svgWidth - this.margin - 7 - this.xAxis.length * 7)
      .attr('y', this.svgHeight - (this.svgHeight) / 4 + this.margin + this.maxX);
  }

  private drawChart() {
    this.buildBackground();
    this.buildLegend();
    this.buildNvGraph();
    this.animateGraphs();
  }

  private buildNvGraph() {
    this.tuneNvGraph();

    nv.addGraph(() => {
      this.svg.datum(this.data)
        .transition().duration(0)
        .call(this.lineChart);
      nv.utils.windowResize(this.resizeBackground.bind(this));
      nv.utils.windowResize(this.lineChart.update);
      return this.lineChart;
    });
  }

  private tuneNvGraph() {
    this.lineChart = nv.models.lineChart()
      .margin({ top: this.margin, right: this.margin, bottom: 0, left: this.margin })
      .useInteractiveGuideline(true)
      .xDomain([0, this.maxX])
      .yDomain([-1.01, 3])
      .showLegend(false)
      .showYAxis(true)
      .showXAxis(true)
      .pointSize(5);

    this.lineChart.tooltip.enabled(false);
    this.lineChart.interactiveLayer.tooltip.enabled(false);

    this.lineChart.xAxis
      .showMaxMin(false)
      .tickValues([0]);

    this.lineChart.yAxis
      .showMaxMin(false)
      .ticks(10);
  }

  private buildLegend() {
    const legend = this.container.append('div')
      .attr('class', 'legend')
      .selectAll('.legend__item')
      .data(this.data)
      .enter()
      .append('div')
      .attr('class', 'legend__item');

    legend.append('div')
      .attr('class', 'legend__mark pull-left')
      .style('background-color', d => d.color);

    legend.append('div')
      .attr('class', 'legend__text')
      .text(d => d.key);
  }

  private resizeBackground() {
    this.getSvgSizes();
    this.setBackgroundSizes();
  }

  private animateGraphs() {
    let i = 0;
    this.timer = setInterval(
      () => {
        this.calcAllGraphs(i);
        this.drawNextStep(i);
        i += this.xStep;
        this.checkEndOfAnimation(i);
      },
      Math.round(400 / ((this.maxX / this.xStep) / this.xDrawStep)),
    );
  }

  private drawNextStep(i) {
    if (i !== 0 && i % this.drawStep === 0 || i === this.maxX) {
      this.lineChart.update();
    }
  }

  private checkEndOfAnimation(i) {
    if (i >= this.maxX + 1) {
      this.lineChart.duration(this.durationResizeAnimation);
      this.data.forEach((item) => {
        item.fillOpacity = 0.11;
      });

      clearInterval(this.timer);
      this.lineChart.update();
    }
  }

  private calcAllGraphs(i) {
    this.data.forEach(item => item.graphFunction(i));
  }
}
