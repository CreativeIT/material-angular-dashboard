import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ThemeModule } from 'theme';

import { LineChartDirective } from './line-chart.directive';
import { LineChartService } from './line-chart.service';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    FormsModule,
  ],
  providers: [
    LineChartService,
  ],
  declarations: [
    LineChartDirective,
  ],
  exports: [
    LineChartDirective,
  ],
})
export class LineChartModule { }
