import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ThemeModule } from 'theme/theme.module';

import {
  ChartsComponent,
  BrowserStatisticsChartModule,
  CountryStatisticsChartModule,
  DiscreteBarChartModule,
  LineChart1Module,
  LineChart2Module,
  LinePlusBarChartModule,
  StackedBarChartModule,
} from '.';

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
