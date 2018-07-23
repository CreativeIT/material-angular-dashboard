import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ThemeModule } from 'theme/theme.module';

import { ComponentsComponent } from './components.component';
import { TogglesComponent } from './toggles/toggles.component';
import { ProgressBarsComponent } from './progress-bars/progress-bars.component';
import { ChipsComponent } from './chips/chips.component';
import { SlidersComponent } from './sliders/sliders.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { BadgesComponent } from './badges/badges.component';

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
