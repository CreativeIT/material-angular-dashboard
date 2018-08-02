import { Component, HostBinding, Input } from '@angular/core';

import { ToggleComponent } from 'theme/components/toggle/toggle.component';

@Component({
  selector: 'label[baseCheckbox]',
  styleUrls: ['../toggle/toggle.component.scss'],
  template: `
    <input type="checkbox" [id]="innerID" class="mdl-checkbox__input" [checked]="isChecked" (change)="isChecked = !isChecked">
    <span class="mdl-checkbox__label"><ng-content></ng-content></span>
  `,
})
export class CheckboxComponent extends ToggleComponent {
  @HostBinding('class') private get className() {
    return `mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect checkbox--colored-${this.color}`;
  }
}
