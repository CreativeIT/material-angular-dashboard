import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardActionsComponent } from './card-actions.component';
import { CardBodyComponent } from './card-body.component';
import { CardMenuComponent } from './card-menu.component';
import { CardTitleComponent } from './card-title.component';
import { CardComponent } from './card.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CardComponent,
    CardTitleComponent,
    CardMenuComponent,
    CardBodyComponent,
    CardActionsComponent,
  ],
  exports: [
    CardComponent,
    CardTitleComponent,
    CardMenuComponent,
    CardBodyComponent,
    CardActionsComponent,
  ],
})
export class CardModule { }
