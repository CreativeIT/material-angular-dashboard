import { RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { BaseSidebarModule } from './components/sidebar/sidebar.module';
import { BaseCardModule } from './components/card/card.module';
import { BaseTooltipModule } from './directives/tooltip/tooltip.module';
import { BasePageTopComponent } from './components/page-top/page-top.component';
import { BaseSidebarComponent } from './components/sidebar/sidebar.component';
import { BaseMsgMenuComponent } from './components/msg-menu/msg-menu.component';
import { BaseNotificationMenuComponent } from './components/notification-menu/notification-menu.component';
import { BaseLineChartComponent } from './components/line-chart/line-chart.component';
import { BasePieChartComponent } from './components/pie-chart/pie-chart.component';
import { BaseRadioButtonComponent } from './components/radio-button/radio-button.component';
import { BaseCheckboxComponent } from './components/checkbox/checkbox.component';
import { BaseSwitchComponent } from './components/switch/switch.component';
import { BaseIconToggleComponent } from './components/icon-toggle/icon-toggle.component';
import { BaseProgressComponent } from './components/progress/progress.component';

const BASE_COMPONENTS = [
  BasePageTopComponent,
  BaseMsgMenuComponent,
  BaseNotificationMenuComponent,
  BaseLineChartComponent,
  BasePieChartComponent,
  BaseRadioButtonComponent,
  BaseCheckboxComponent,
  BaseSwitchComponent,
  BaseIconToggleComponent,
  BaseProgressComponent,
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
    BaseSidebarModule,
    BaseCardModule,
  ],
  exports: [
    ...BASE_PIPES,
    ...BASE_DIRECTIVES,
    ...BASE_COMPONENTS,
    BaseSidebarModule,
    BaseCardModule,
    BaseTooltipModule,
  ],
})
export class ThemeModule { }
