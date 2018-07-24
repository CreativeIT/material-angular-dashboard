import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ThemeModule } from 'theme';

import { LinePlusBarChartDirective } from './line-plus-bar-chart.directive';
import { LinePlusBarChartComponent } from './line-plus-bar-chart.component';
import { LinePlusBarChartService } from './line-plus-bar-chart.service';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    FormsModule,
  ],
  providers: [
    LinePlusBarChartService,
  ],
  declarations: [
    LinePlusBarChartDirective,
    LinePlusBarChartComponent,
  ],
  exports: [
    LinePlusBarChartComponent,
  ],
})
export class LinePlusBarChartModule { }
