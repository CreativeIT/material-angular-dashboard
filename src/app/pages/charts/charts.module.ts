import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ThemeModule } from 'theme';

import { ChartsComponent } from './charts.component';
import { LineChart1Module } from './line-chart-1';
import { LineChart2Module } from './line-chart-2';
import { BrowserStatisticsChartModule } from './browser-statistics-chart';
import { CountryStatisticsChartModule } from './country-statistics-chart';
import { DiscreteBarChartModule } from './discrete-bar-chart';
import { StackedBarChartModule } from './stacked-bar-chart';
import { LinePlusBarChartModule } from './line-plus-bar-chart';

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
