import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'base-tooltip',
  styleUrls: ['./tooltip.component.scss'],
  template: ``,
})
export class TooltipComponent {
  @HostBinding('innerHTML') @Input() public content;
  @HostBinding('attr.for') @Input() public targetId;
  @Input() public position = 'bottom';
  @HostBinding('class.mdl-tooltip--large') @Input() public large = false;

  @HostBinding('class') private get className() {
    return `mdl-tooltip mdl-tooltip--${this.position}`;
  }
}
