import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutsModule } from 'app/layouts';
import { BlankLayoutComponent } from 'app/layouts/blank-layout';
import { ErrorComponent } from './error';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: BlankLayoutComponent,
        children: [
          { path: '404', component: ErrorComponent, pathMatch: 'full' },
          { path: '**', redirectTo: '404' },
        ],
      },
    ]),
    LayoutsModule,
  ],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
