import { Component, HostBinding, Input } from '@angular/core';

import { ToggleComponent } from 'theme/components/toggle/toggle.component';

@Component({
  selector: 'label[baseIconToggle]',
  styleUrls: ['../toggle/toggle.component.scss'],
  template: `
    <input type="checkbox" [id]="innerID" class="mdl-icon-toggle__input" [checked]="isChecked" (change)="isChecked = !isChecked">
    <i class="mdl-icon-toggle__label material-icons"><ng-content></ng-content></i>
  `,
})
export class IconToggleComponent extends ToggleComponent {
  @HostBinding('class') private get className() {
    return `mdl-icon-toggle mdl-js-icon-toggle mdl-js-ripple-effect icon-toggle--colored-${this.color}`;
  }
}
