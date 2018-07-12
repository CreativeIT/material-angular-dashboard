import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ThemeModule } from 'theme/theme.module';

import {
  ChartsComponent,
  BrowserStatisticsChartModule,
  CountryStatisticsChartModule,
  DiscreteBarChartComponent,
  LineChart1Module,
  LineChart2Module,
  LinePlusBarChartComponent,
  StackedBarChartComponent,
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
  ],
  declarations: [
    ChartsComponent,
    DiscreteBarChartComponent,
    LinePlusBarChartComponent,
    StackedBarChartComponent,
  ],
})
export class ChartsModule { }
