import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ThemeModule } from 'theme';

import { MapComponent } from './map';
import { MapsComponent } from './maps.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    FormsModule,
  ],
  declarations: [
    MapsComponent,
    MapComponent,
  ],
  providers: [],
})
export class MapsModule { }
