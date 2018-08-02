import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ThemeModule } from 'theme';

import { ChartsComponent } from './charts.component';
import { LineChart1Component } from './line-chart-1';
import { LineChart2Component } from './line-chart-2';
import { BrowserStatisticsChartComponent } from './browser-statistics-chart';
import { CountryStatisticsChartComponent } from './country-statistics-chart';
import { DiscreteBarChartComponent } from './discrete-bar-chart';
import { StackedBarChartComponent } from './stacked-bar-chart';
import { LinePlusBarChartComponent } from './line-plus-bar-chart';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    FormsModule,
  ],
  declarations: [
    ChartsComponent,
    BrowserStatisticsChartComponent,
    LineChart1Component,
    LineChart2Component,
    CountryStatisticsChartComponent,
    DiscreteBarChartComponent,
    StackedBarChartComponent,
    LinePlusBarChartComponent,
  ],
})
export class ChartsModule { }
