import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ThemeModule } from 'theme';

import { MapComponent } from './map';
import { MapAdvancedComponent } from './map-advanced';
import { MapsRoutingModule } from './maps-routing.module';
import { MapsService } from './maps.service';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    MapsRoutingModule,
  ],
  declarations: [
    MapComponent,
    MapAdvancedComponent,
  ],
  providers: [MapsService],
})
export class MapsModule { }
