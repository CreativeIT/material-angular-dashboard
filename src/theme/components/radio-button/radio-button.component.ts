import { Component, HostBinding, Input } from '@angular/core';

import { ToggleComponent } from 'theme/components/toggle/toggle.component';

@Component({
  selector: 'label[baseRadioButton]',
  styleUrls: ['../toggle/toggle.component.scss'],
  template: `
    <input type="radio" [id]="innerID" class="mdl-radio__button" [name]="name" [value]="value" [(ngModel)]="isChecked" [checked]="isChecked">
    <span class="mdl-radio__label"><ng-content></ng-content></span>
  `,
})
export class RadioButtonComponent extends ToggleComponent {
  @Input() private name;
  @Input() private value;

  @HostBinding('class') private get className() {
    return `mdl-radio mdl-js-radio mdl-js-ripple-effect radio--colored-${this.color}`;
  }
}
