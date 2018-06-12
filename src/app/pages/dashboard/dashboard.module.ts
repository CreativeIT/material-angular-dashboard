import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ThemeModule } from 'theme/theme.module';

import {
  DashboardComponent,
  WeatherComponent,
  CotoneasterCardComponent,
  LineChartComponent,
  TableCardComponent,
  RobotCardComponent,
  TodoListComponent,
  TrendingComponent,
  PieChartComponent,
} from './index';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    FormsModule,
  ],
  declarations: [
    DashboardComponent,
    WeatherComponent,
    CotoneasterCardComponent,
    LineChartComponent,
    TableCardComponent,
    RobotCardComponent,
    TodoListComponent,
    TrendingComponent,
    PieChartComponent,
  ],
})
export class DashboardModule { }
