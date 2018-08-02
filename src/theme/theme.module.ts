import { RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CardModule } from './components/card';
import { TooltipModule } from './directives/tooltip';
import { PageTopComponent } from './components/page-top';
import { SidebarModule } from './components/sidebar';
import { RadioButtonComponent } from './components/radio-button';
import { CheckboxComponent } from './components/checkbox';
import { SwitchComponent } from './components/switch';
import { IconToggleComponent } from './components/icon-toggle';
import { ProgressComponent } from './components/progress';

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
