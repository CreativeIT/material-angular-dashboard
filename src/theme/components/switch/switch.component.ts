import { Component, HostBinding, Input } from '@angular/core';

import { ToggleComponent } from 'theme/components/toggle/toggle.component';

@Component({
  selector: 'label[baseSwitch]',
  styleUrls: ['../toggle/toggle.component.scss'],
  template: `
    <input type="checkbox" [id]="innerID" class="mdl-switch__input" [checked]="isChecked" (change)="isChecked = !isChecked">
    <span class="mdl-switch__label"><ng-content></ng-content></span>
  `,
})
export class SwitchComponent extends ToggleComponent {
  @HostBinding('class') private get className() {
    return `mdl-switch mdl-js-switch mdl-js-ripple-effect switch--colored-${this.color}`;
  }
}
