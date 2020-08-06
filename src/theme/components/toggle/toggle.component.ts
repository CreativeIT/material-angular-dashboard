import { Component, HostBinding, Input } from '@angular/core';

@Component({
  template: '',
})
export abstract class ToggleComponent {
  public static idCounter = 0;

  public isChecked = false;

  @HostBinding('for') @Input() public innerID = `base-toggle-${ToggleComponent.idCounter += 1}`;

  @Input() public color;

  @Input() set checked(value) {
    if (value || value === '') {
      this.isChecked = true;
    }
  }
}
