import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ThemeModule } from 'theme';

import { MapsComponent } from './maps.component';
import { MapComponent } from './map';

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
