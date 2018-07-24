import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ThemeModule } from 'theme';

import { PieChartDirective } from './pie-chart.directive';
import { PieChartService } from './pie-chart.service';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    FormsModule,
  ],
  providers: [
    PieChartService,
  ],
  declarations: [
    PieChartDirective,
  ],
  exports: [
    PieChartDirective,
  ],
})
export class PieChartModule { }
