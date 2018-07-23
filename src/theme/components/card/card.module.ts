import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseCardComponent } from './card.component';
import { BaseCardTitleComponent } from './card-title.component';
import { BaseCardMenuComponent } from './card-menu.component';
import { BaseCardBodyComponent } from './card-body.component';
import { BaseCardActionsComponent } from './card-actions.component';

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
