import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CardModule } from './components/card';
import { CheckboxComponent } from './components/checkbox';
import { IconToggleComponent } from './components/icon-toggle';
import { LineChartComponent } from './components/line-chart';
import { PageTopComponent } from './components/page-top';
import { PaginationComponent } from './components/pagination';
import { PieChartComponent } from './components/pie-chart';
import { ProgressComponent } from './components/progress';
import { RadioButtonComponent } from './components/radio-button';
import { SidebarModule } from './components/sidebar';
import { SwitchComponent } from './components/switch';
import { ToggleComponent } from './components/toggle';
import { UpgradableComponent } from './components/upgradable';
import { TooltipModule } from './directives/tooltip';

const BASE_COMPONENTS = [
  PageTopComponent,
  RadioButtonComponent,
  CheckboxComponent,
  SwitchComponent,
  IconToggleComponent,
  ProgressComponent,
  PaginationComponent,
  ToggleComponent,
  UpgradableComponent,
  PieChartComponent,
  LineChartComponent,
];

const BASE_DIRECTIVES = [];

const BASE_PIPES = [];

@NgModule({
  declarations: [
    ...BASE_PIPES,
    ...BASE_DIRECTIVES,
    ...BASE_COMPONENTS,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SidebarModule,
    CardModule,
  ],
  exports: [
    ...BASE_PIPES,
    ...BASE_DIRECTIVES,
    ...BASE_COMPONENTS,
    SidebarModule,
    CardModule,
    TooltipModule,
  ],
})
export class ThemeModule { }
