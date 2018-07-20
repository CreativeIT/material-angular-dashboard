import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ThemeModule } from 'theme/theme.module';

import { ChartsComponent } from './charts.component';
import { LineChart1Module } from './line-chart-1/line-chart-1.module';
import { LineChart2Module } from './line-chart-2/line-chart-2.module';
import { BrowserStatisticsChartModule } from './browser-statistics-chart/browser-statistics-chart.module';
import { CountryStatisticsChartModule } from './country-statistics-chart/country-statistics-chart.module';
import { DiscreteBarChartModule } from './discrete-bar-chart/discrete-bar-chart.module';
import { StackedBarChartModule } from './stacked-bar-chart/stacked-bar-chart.module';
import { LinePlusBarChartModule } from './line-plus-bar-chart/line-plus-bar-chart.module';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    FormsModule,
    LineChart1Module,
    LineChart2Module,
    BrowserStatisticsChartModule,
    CountryStatisticsChartModule,
    DiscreteBarChartModule,
    StackedBarChartModule,
    LinePlusBarChartModule,
  ],
  declarations: [
    ChartsComponent,
  ],
})
export class ChartsModule { }
