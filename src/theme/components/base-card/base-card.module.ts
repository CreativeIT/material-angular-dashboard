import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseCardComponent } from './base-card.component';
import { BaseCardTitleComponent } from './base-card-title.component';
import { BaseCardMenuComponent } from './base-card-menu.component';
import { BaseCardBodyComponent } from './base-card-body.component';
import { BaseCardActionsComponent } from './base-card-actions.component';

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
  ],
})
export class BaseCardModule { }
