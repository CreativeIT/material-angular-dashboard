import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ThemeModule } from 'theme';

import { ButtonsComponent } from './buttons';
import { CardsComponent } from './cards';
import { ColorsComponent } from './colors';
import { BadgesComponent } from './components/badges';
import { ChipsComponent } from './components/chips';
import { ComponentsComponent } from './components/components.component';
import { ProgressBarsComponent } from './components/progress-bars';
import { SlidersComponent } from './components/sliders';
import { TogglesComponent } from './components/toggles';
import { TooltipsComponent } from './components/tooltips';
import { FormsComponent } from './forms';
import { IconsComponent } from './icons';
import { TablesComponent, TablesService } from './tables';
import { TypographyComponent } from './typography';
import { UIRoutingModule } from './ui-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UIRoutingModule,
    ThemeModule,
  ],
  declarations: [
    ButtonsComponent,
    CardsComponent,
    ColorsComponent,
    FormsComponent,
    IconsComponent,
    TypographyComponent,
    TablesComponent,
    ComponentsComponent,
    TogglesComponent,
    ProgressBarsComponent,
    ChipsComponent,
    SlidersComponent,
    TooltipsComponent,
    BadgesComponent,
  ],
  providers: [
    TablesService,
  ],
})
export class UIModule { }
