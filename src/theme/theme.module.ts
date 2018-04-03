import { RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { BaseSidebarModule } from './components/base-sidebar/base-sidebar.module';
import { BaseCardModule } from './components/base-card/base-card.module';

import {
  BasePageTopComponent,
  BaseMsgMenuComponent,
  BaseNotificationMenuComponent,
} from './components';

const BASE_COMPONENTS = [
  BasePageTopComponent,
  BaseMsgMenuComponent,
  BaseNotificationMenuComponent,
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
