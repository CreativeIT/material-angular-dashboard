import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card.component';
import { CardTitleComponent } from './card-title.component';
import { CardMenuComponent } from './card-menu.component';
import { CardBodyComponent } from './card-body.component';
import { CardActionsComponent } from './card-actions.component';

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
