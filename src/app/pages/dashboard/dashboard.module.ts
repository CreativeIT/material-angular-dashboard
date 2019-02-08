import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ThemeModule } from 'theme';

import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule {}
