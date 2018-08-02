import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TooltipComponent } from './tooltip.component';
import { TooltipDirective } from './tooltip.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TooltipComponent,
    TooltipDirective,
  ],
  exports: [
    TooltipDirective,
  ],
  entryComponents: [
    TooltipComponent,
  ],
})
export class TooltipModule { }
