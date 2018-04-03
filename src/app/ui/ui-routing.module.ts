import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { ColorsComponent } from './colors/colors.component';
import { FormsComponent } from './forms/forms.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';
import { TablesComponent } from './tables/tables.component';
import { LayoutComponent } from 'app/layout/layout.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: LayoutComponent,
      children: [
        { path: 'buttons', component: ButtonsComponent, pathMatch: 'full' },
        { path: 'cards', component: CardsComponent, pathMatch: 'full' },
        { path: 'colors', component: ColorsComponent, pathMatch: 'full' },
        { path: 'forms', component: FormsComponent, pathMatch: 'full' },
        { path: 'icons', component: IconsComponent, pathMatch: 'full' },
        { path: 'typography', component: TypographyComponent, pathMatch: 'full' },
        { path: 'tables', component: TablesComponent, pathMatch: 'full' },
      ],
    }
  ])],
  exports: [RouterModule]
})
export class UIRoutingModule { }
