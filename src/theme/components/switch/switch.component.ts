import { Component, Input } from '@angular/core';

import { ToggleComponent } from 'theme/components/toggle/toggle.component';

@Component({
  selector: 'base-switch, base-toggle[type=checkbox]',
  styleUrls: ['../toggle/toggle.component.scss'],
  template: `
    <label class="mdl-switch mdl-js-switch mdl-js-ripple-effect switch--colored-{{ color }}" [for]="id">
      <input type="checkbox" [id]="id" class="mdl-switch__input" [checked]="isChecked" (change)="isChecked = !isChecked">
      <span class="mdl-switch__label"><ng-content></ng-content></span>
    </label>
  `,
})
export class SwitchComponent extends ToggleComponent { }
