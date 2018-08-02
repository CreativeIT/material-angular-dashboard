import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CardModule } from './components/card';
import { CheckboxComponent } from './components/checkbox';
import { IconToggleComponent } from './components/icon-toggle';
import { PageTopComponent } from './components/page-top';
import { ProgressComponent } from './components/progress';
import { RadioButtonComponent } from './components/radio-button';
import { SidebarModule } from './components/sidebar';
import { SwitchComponent } from './components/switch';
import { TooltipModule } from './directives/tooltip';

const BASE_COMPONENTS = [
  PageTopComponent,
  RadioButtonComponent,
  CheckboxComponent,
  SwitchComponent,
  IconToggleComponent,
  ProgressComponent,
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
