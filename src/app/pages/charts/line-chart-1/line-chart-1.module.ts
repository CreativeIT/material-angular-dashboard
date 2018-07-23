import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ThemeModule } from 'theme/theme.module';

import { LineChart1Directive } from './line-chart-1.directive';
import { LineChart1Service } from './line-chart-1.service';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    FormsModule,
  ],
  providers: [
    LineChart1Service,
  ],
  declarations: [
    LineChart1Directive,
  ],
  exports: [
    LineChart1Directive,
  ],
})
export class LineChart1Module { }
