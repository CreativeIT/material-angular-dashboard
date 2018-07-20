import { Component, Input } from '@angular/core';

import { BaseToggleComponent } from 'theme/components/toggle/toggle.component';

@Component({
  selector: 'base-icon-toggle, base-toggle[type=icon]',
  styleUrls: ['../toggle/toggle.component.scss'],
  template: `
    <label class="mdl-icon-toggle mdl-js-icon-toggle mdl-js-ripple-effect icon-toggle--colored-{{ color }}" [for]="id">
      <input type="checkbox" [id]="id" class="mdl-icon-toggle__input" [checked]="isChecked" (change)="isChecked = !isChecked">
      <i class="mdl-icon-toggle__label material-icons"><ng-content></ng-content></i>
    </label>
  `,
})
export class BaseIconToggleComponent extends BaseToggleComponent { }
