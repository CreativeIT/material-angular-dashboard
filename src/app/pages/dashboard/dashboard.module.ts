import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ThemeModule } from 'theme/theme.module';

import { DashboardComponent } from './dashboard.component';
import { LineChartModule } from './line-chart/line-chart.module';
import { PieChartModule } from './pie-chart/pie-chart.module';
import { WeatherComponent } from './weather/weather.component';
import { TrendingComponent } from './trending/trending.component';
import { RobotCardComponent } from './robot-card/robot-card.component';
import { CotoneasterCardComponent } from './cotoneaster-card/cotoneaster-card.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TableCardComponent } from './table-card/table-card.component';

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
