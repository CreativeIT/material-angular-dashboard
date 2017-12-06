import { RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {
  BasePageTopComponent,
  BaseSidebarComponent,
  BaseMsgMenuComponent,
  BaseNotificationMenuComponent,
  BaseCardComponent,
} from './components';

const BASE_COMPONENTS = [
  BasePageTopComponent,
  BaseSidebarComponent,
  BaseMsgMenuComponent,
  BaseNotificationMenuComponent,
  BaseCardComponent,
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
    // FIXME: get rid of the RouterModule
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ...BASE_PIPES,
    ...BASE_DIRECTIVES,
    ...BASE_COMPONENTS,
  ],
})
export class ThemeModule {}
