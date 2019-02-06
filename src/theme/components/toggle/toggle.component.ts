import { Component, HostBinding, Input } from '@angular/core';

@Component({
  template: '',
})
export abstract class ToggleComponent {
  private static idCounter = 0;

  private isChecked = false;

  @HostBinding('for') @Input() protected innerID = `base-toggle-${ToggleComponent.idCounter += 1}`;

  @Input() protected color;

  @Input() set checked(value) {
    if (value || value === '') {
      this.isChecked = true;
    }
  }
}
