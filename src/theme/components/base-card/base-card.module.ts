import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  BaseCardComponent,
  BaseCardTitleComponent,
  BaseCardMenuComponent,
  BaseCardBodyComponent,
  BaseCardActionsComponent,
} from './base-card.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    BaseCardComponent,
    BaseCardTitleComponent,
    BaseCardMenuComponent,
    BaseCardBodyComponent,
    BaseCardActionsComponent,
  ],
  exports: [
    BaseCardComponent,
    BaseCardTitleComponent,
    BaseCardMenuComponent,
    BaseCardBodyComponent,
    BaseCardActionsComponent,
  ]
})
export class BaseCardModule { }
