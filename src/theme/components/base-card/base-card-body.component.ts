import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';

import { HostClassBinding } from 'helpers';

@Component({
  selector: 'base-card base-card-body',
  styleUrls: ['./base-card.component.scss'],
  template: `<ng-content></ng-content>`,
})
@HostClassBinding(function () {
  return `mdl-card__supporting-text ${this.isExpanded ? 'mdl-card--expand' : ''}`;
})
export class BaseCardBodyComponent {
  private isExpanded = false;

  @Input() set expanded(value) {
    if (value || value === '') {
      this.isExpanded = true;
    }
  }
}
