import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as NgFormsModule } from '@angular/forms';
import { ThemeModule } from 'theme/theme.module';

import { MapsComponent } from './maps.component';

import { MapComponent } from './map/map.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    NgFormsModule,
  ],
  declarations: [
    MapsComponent,
    MapComponent,
  ],
  providers: [],
})
export class MapsModule { }
