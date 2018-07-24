import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeModule } from 'theme';

import { UIRoutingModule } from './ui-routing.module';
import { ButtonsComponent } from './buttons';
import { CardsComponent } from './cards';
import { ColorsComponent } from './colors';
import { FormsComponent } from './forms';
import { IconsComponent } from './icons';
import { TypographyComponent } from './typography';
import { TablesComponent } from './tables';
import { ComponentsModule } from './components';

@NgModule({
  imports: [
    CommonModule,
    UIRoutingModule,
    ThemeModule,
    ComponentsModule,
  ],
  declarations: [
    ButtonsComponent,
    CardsComponent,
    ColorsComponent,
    FormsComponent,
    IconsComponent,
    TypographyComponent,
    TablesComponent,
  ],
})
export class UIModule { }
