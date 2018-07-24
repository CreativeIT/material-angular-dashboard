import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ButtonsComponent } from './buttons';
import { CardsComponent } from './cards';
import { ColorsComponent } from './colors';
import { FormsComponent } from './forms';
import { IconsComponent } from './icons';
import { TypographyComponent } from './typography';
import { TablesComponent } from './tables';
import { ComponentsComponent } from './components';
import { CommonLayoutComponent } from 'app/layouts/common-layout';
import { LayoutsModule } from 'app/layouts';

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
          { path: 'components', component: ComponentsComponent, pathMatch: 'full' },
        ],
      },
    ]),
    LayoutsModule,
  ],
  exports: [RouterModule],
})
export class UIRoutingModule { }
