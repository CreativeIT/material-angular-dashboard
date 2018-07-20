import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseTooltipComponent } from './tooltip.component';
import { BaseTooltipDirective } from './tooltip.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    BaseTooltipComponent,
    BaseTooltipDirective,
  ],
  exports: [
    BaseTooltipDirective,
  ],
  entryComponents: [
    BaseTooltipComponent,
  ],
})
export class BaseTooltipModule { }
