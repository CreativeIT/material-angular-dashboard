import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ThemeModule } from 'theme';

import { StackedBarChartDirective } from './stacked-bar-chart.directive';
import { StackedBarChartComponent } from './stacked-bar-chart.component';
import { StackedBarChartService } from './stacked-bar-chart.service';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    FormsModule,
  ],
  providers: [
    StackedBarChartService,
  ],
  declarations: [
    StackedBarChartDirective,
    StackedBarChartComponent,
  ],
  exports: [
    StackedBarChartComponent,
  ],
})
export class StackedBarChartModule { }
