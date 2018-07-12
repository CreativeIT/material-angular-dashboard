import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ThemeModule } from 'theme/theme.module';

import { BrowserStatisticsChartDirective } from './browser-statistics-chart.directive';
import { BrowserStatisticsChartService } from './browser-statistics-chart.service';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    FormsModule,
  ],
  providers: [
    BrowserStatisticsChartService,
  ],
  declarations: [
    BrowserStatisticsChartDirective,
  ],
  exports: [
    BrowserStatisticsChartDirective,
  ],
})
export class BrowserStatisticsChartModule { }
