import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeModule } from 'theme/theme.module';
import { LayoutsModule } from 'app/layouts/layouts.module';

import { UIRoutingModule } from './ui-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { ColorsComponent } from './colors/colors.component';
import { FormsComponent } from './forms/forms.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';
import { TablesComponent } from './tables/tables.component';
import { ComponentsComponent } from './components/components.component';

@NgModule({
  imports: [
    CommonModule,
    UIRoutingModule,
    LayoutsModule,
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
  ],
})
export class UIModule { }
