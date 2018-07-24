import { Component, Input } from '@angular/core';

import { ToggleComponent } from 'theme/components/toggle/toggle.component';

@Component({
  selector: 'base-checkbox, base-toggle[type=checkbox]',
  styleUrls: ['../toggle/toggle.component.scss'],
  template: `
    <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect checkbox--colored-{{ color }}" [for]="id">
      <input type="checkbox" [id]="id" class="mdl-checkbox__input" [checked]="isChecked" (change)="isChecked = !isChecked">
      <span class="mdl-checkbox__label"><ng-content></ng-content></span>
    </label>
  `,
})
export class CheckboxComponent extends ToggleComponent { }
