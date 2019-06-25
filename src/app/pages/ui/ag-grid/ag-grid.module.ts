import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';

import { ThemeModule } from 'theme';

import {
  AgAvailableComponent,
  AgGridComponent,
  AgGridService,
  AgLabelComponent,
  AgPaginationComponent,
} from './index';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    FormsModule,
    AgGridModule.withComponents([AgLabelComponent, AgAvailableComponent]),
  ],
  declarations: [
    AgGridComponent,
    AgLabelComponent,
    AgAvailableComponent,
    AgPaginationComponent,
  ],
  providers: [
    AgGridService,
  ],
  exports: [
    AgGridComponent,
  ],
})
export class AgGridComponentModule {
}
