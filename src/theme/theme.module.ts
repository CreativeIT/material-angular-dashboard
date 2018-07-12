import { RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { BaseSidebarModule } from './components/sidebar/sidebar.module';
import { BaseCardModule } from './components/card/card.module';

import {
  BasePageTopComponent,
  BaseMsgMenuComponent,
  BaseNotificationMenuComponent,
  BaseLineChartComponent,
  BasePieChartComponent,
} from './components';

const BASE_COMPONENTS = [
  BasePageTopComponent,
  BaseMsgMenuComponent,
  BaseNotificationMenuComponent,
  BaseLineChartComponent,
  BasePieChartComponent,
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
  ],
})
export class ThemeModule { }
