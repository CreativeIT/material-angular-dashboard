import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutsModule } from 'app/layouts';
import { CommonLayoutComponent } from 'app/layouts/common-layout';
import { MapComponent } from './map';
import { MapAdvancedComponent } from './map-advanced';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: CommonLayoutComponent,
        children: [
          { path: 'simple', component: MapComponent, pathMatch: 'full' },
          { path: 'advanced', component: MapAdvancedComponent, pathMatch: 'full' },
        ],
      },
    ]),
    LayoutsModule,
  ],
  exports: [RouterModule],
})
export class MapsRoutingModule {}
