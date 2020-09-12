import * as d3 from 'd3';
import * as nv from 'nvd3';

import { Component, HostBinding } from '@angular/core';

@Component({
  template: '',
})
export abstract class PieChartComponent {
  @HostBinding('class.pie-chart__container') private readonly pieChartContainer = true;
}
