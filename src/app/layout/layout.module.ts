import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { ThemeModule } from 'theme/theme.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { FormsModule } from '../forms/forms.module';
import { MapsModule } from '../maps/maps.module';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    LayoutRoutingModule,
    DashboardModule,
    FormsModule,
    MapsModule,
  ],
  declarations: [
    LayoutComponent,
  ]
})
export class LayoutModule {}
