import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ThemeModule } from 'theme';

import { ComponentsComponent } from './components.component';
import { TogglesComponent } from './toggles';
import { ProgressBarsComponent } from './progress-bars';
import { ChipsComponent } from './chips';
import { SlidersComponent } from './sliders';
import { TooltipsComponent } from './tooltips';
import { BadgesComponent } from './badges';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    FormsModule,
  ],
  exports: [
    ComponentsComponent,
  ],
  declarations: [
    ComponentsComponent,
    TogglesComponent,
    ProgressBarsComponent,
    ChipsComponent,
    SlidersComponent,
    TooltipsComponent,
    BadgesComponent,
  ],
})
export class ComponentsModule { }
