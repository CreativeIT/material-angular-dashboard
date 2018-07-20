import { Component, Input } from '@angular/core';

@Component({ })
export class BaseToggleComponent {
  static idCounter = 0;

  private isChecked = false;

  @Input() public id = `base-toggle-${BaseToggleComponent.idCounter += 1}`;
  @Input() color;

  @Input() set checked(value) {
    if (value || value === '') {
      this.isChecked = true;
    }
  }
}
