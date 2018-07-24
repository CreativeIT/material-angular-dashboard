import { Component, Input } from '@angular/core';

@Component({
  selector: 'base-tooltip',
  template: `<div class="mdl-tooltip mdl-tooltip--{{ position }}" [class.mdl-tooltip--large]="large" [attr.for]="targetId" [innerHTML]="content"></div>`,
})
export class TooltipComponent {
  @Input() content;
  @Input() targetId;
  @Input() position = 'bottom';
  @Input() large = false;
}
