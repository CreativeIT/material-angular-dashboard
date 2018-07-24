import { Component, Input } from '@angular/core';

import { ToggleComponent } from 'theme/components/toggle/toggle.component';

@Component({
  selector: 'base-radio-button, base-toggle[type=radio]',
  styleUrls: ['../toggle/toggle.component.scss'],
  template: `
    <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect radio--colored-{{ color }}" [for]="id">
      <input type="radio" [id]="id" class="mdl-radio__button" [name]="name" [value]="value" [(ngModel)]="isChecked" [checked]="isChecked">
      <span class="mdl-radio__label"><ng-content></ng-content></span>
    </label>
  `,
})
export class RadioButtonComponent extends ToggleComponent {
  @Input() name;
  @Input() value;
}
