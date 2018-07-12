import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ThemeModule } from 'theme/theme.module';

import {
  DashboardComponent,
  WeatherComponent,
  CotoneasterCardComponent,
  TableCardComponent,
  RobotCardComponent,
  TodoListComponent,
  TrendingComponent,
  PieChartModule,
  LineChartModule,
} from '.';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    FormsModule,
    LineChartModule,
    PieChartModule,
  ],
  declarations: [
    DashboardComponent,
    WeatherComponent,
    CotoneasterCardComponent,
    TableCardComponent,
    RobotCardComponent,
    TodoListComponent,
    TrendingComponent,
  ],
})
export class DashboardModule { }
