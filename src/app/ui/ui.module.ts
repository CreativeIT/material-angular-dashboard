import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeModule } from 'theme/theme.module';
import { LayoutModule } from 'app/layout/layout.module';

import { UIRoutingModule } from './ui-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { ColorsComponent } from './colors/colors.component';
import { FormsComponent } from './forms/forms.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';
import { TablesComponent } from './tables/tables.component';

@NgModule({
  imports: [
    CommonModule,
    UIRoutingModule,
    LayoutModule,
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
  ]
})
export class UIModule { }
