import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ThemeModule } from 'theme';

import { CountryStatisticsChartDirective } from './country-statistics-chart.directive';
import { CountryStatisticsChartService } from './country-statistics-chart.service';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    FormsModule,
  ],
  providers: [
    CountryStatisticsChartService,
  ],
  declarations: [
    CountryStatisticsChartDirective,
  ],
  exports: [
    CountryStatisticsChartDirective,
  ],
})
export class CountryStatisticsChartModule { }
