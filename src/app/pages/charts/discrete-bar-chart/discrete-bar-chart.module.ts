import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ThemeModule } from 'theme/theme.module';

import { DiscreteBarChartDirective } from './discrete-bar-chart.directive';
import { DiscreteBarChartComponent } from './discrete-bar-chart.component';
import { DiscreteBarChartService } from './discrete-bar-chart.service';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    FormsModule,
  ],
  providers: [
    DiscreteBarChartService,
  ],
  declarations: [
    DiscreteBarChartDirective,
    DiscreteBarChartComponent,
  ],
  exports: [
    DiscreteBarChartComponent,
  ],
})
export class DiscreteBarChartModule { }
