import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ThemeModule } from 'theme';

import { DashboardComponent } from './dashboard.component';
import { LineChartComponent } from './line-chart';
import { PieChartComponent } from './pie-chart';
import { WeatherComponent } from './weather';
import { TrendingComponent } from './trending';
import { RobotCardComponent } from './robot-card';
import { CotoneasterCardComponent } from './cotoneaster-card';
import { TodoListComponent } from './todo-list';
import { TableCardComponent } from './table-card';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    FormsModule,
  ],
  declarations: [
    DashboardComponent,
    LineChartComponent,
    PieChartComponent,
    WeatherComponent,
    CotoneasterCardComponent,
    TableCardComponent,
    RobotCardComponent,
    TodoListComponent,
    TrendingComponent,
  ],
})
export class DashboardModule { }
