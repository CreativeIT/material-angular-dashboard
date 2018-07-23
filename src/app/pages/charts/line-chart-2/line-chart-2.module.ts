import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ThemeModule } from 'theme/theme.module';

import { LineChart2Directive } from './line-chart-2.directive';
import { LineChart2Service } from './line-chart-2.service';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    FormsModule,
  ],
  providers: [
    LineChart2Service,
  ],
  declarations: [
    LineChart2Directive,
  ],
  exports: [
    LineChart2Directive,
  ],
})
export class LineChart2Module { }
