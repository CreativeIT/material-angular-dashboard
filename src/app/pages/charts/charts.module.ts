import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ThemeModule } from 'theme/theme.module';

import {
  ChartsComponent,
  BrowserStatisticsChartComponent,
  CountryStatisticsChartComponent,
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
  ],
  declarations: [
    ChartsComponent,
    BrowserStatisticsChartComponent,
    CountryStatisticsChartComponent,
    DiscreteBarChartComponent,
    LinePlusBarChartComponent,
    StackedBarChartComponent,
  ],
})
export class ChartsModule { }
