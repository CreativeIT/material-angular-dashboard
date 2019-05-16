import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutsModule } from 'app/layouts';
import { CommonLayoutComponent } from 'app/layouts/common-layout';
import { ButtonsComponent } from './buttons';
import { CardsComponent } from './cards';
import { ColorsComponent } from './colors';
import { FormsComponent } from './forms';
import { IconsComponent } from './icons';
import { RightSidebarComponent } from './right-sidebar';
import { TablesComponent } from './tables';
import { TypographyComponent } from './typography';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: CommonLayoutComponent,
        children: [
          { path: 'buttons', component: ButtonsComponent, pathMatch: 'full' },
          { path: 'cards', component: CardsComponent, pathMatch: 'full' },
          { path: 'colors', component: ColorsComponent, pathMatch: 'full' },
          { path: 'forms', component: FormsComponent, pathMatch: 'full' },
          { path: 'icons', component: IconsComponent, pathMatch: 'full' },
          { path: 'typography', component: TypographyComponent, pathMatch: 'full' },
          { path: 'tables', component: TablesComponent, pathMatch: 'full' },
          { path: 'right-sidebar', component: RightSidebarComponent, pathMatch: 'full' },
        ],
      },
    ]),
    LayoutsModule,
  ],
  exports: [RouterModule],
})
export class UIRoutingModule { }
