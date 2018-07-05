import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ThemeModule } from 'theme/theme.module';

import { ChartsComponent } from './charts.component';
import { BrowserStatisticsChartComponent } from './browser-statistics-chart/browser-statistics-chart.component';
import { CountryStatisticsChartComponent } from './country-statistics-chart/country-statistics-chart.component';
import { DiscreteBarChartComponent } from './discrete-bar-chart/discrete-bar-chart.component';
import { LineChart1Component } from './line-chart-1/line-chart-1.component';
import { LineChart2Component } from './line-chart-2/line-chart-2.component';
import { LinePlusBarChartComponent } from './line-plus-bar-chart/line-plus-bar-chart.component';
import { StackedBarChartComponent } from './stacked-bar-chart/stacked-bar-chart.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    FormsModule,
  ],
  declarations: [
    ChartsComponent,
    BrowserStatisticsChartComponent,
    CountryStatisticsChartComponent,
    DiscreteBarChartComponent,
    LineChart1Component,
    LineChart2Component,
    LinePlusBarChartComponent,
    StackedBarChartComponent,
  ],
})
export class ChartsModule { }
