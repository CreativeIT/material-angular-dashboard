import { Component, Input } from '@angular/core';

@Component({ })
export class ToggleComponent {
  static idCounter = 0;

  private isChecked = false;

  @Input() public id = `base-toggle-${ToggleComponent.idCounter += 1}`;
  @Input() color;

  @Input() set checked(value) {
    if (value || value === '') {
      this.isChecked = true;
    }
  }
}
