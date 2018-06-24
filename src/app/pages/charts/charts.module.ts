import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ThemeModule } from 'theme/theme.module';

import {
  ChartsComponent,
  BrowserStatisticsChartComponent,
  CountryStatisticsChartComponent,
} from './index';

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
  ],
})
export class ChartsModule { }
