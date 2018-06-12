import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';

import { HostClassBinding } from 'helpers';

@Component({
  selector: 'base-card base-card-actions',
  styleUrls: ['./card.component.scss'],
  template: `<ng-content></ng-content>`,
})
@HostClassBinding('mdl-card__actions', true)
export class BaseCardActionsComponent {
  constructor(
    private viewContainerRef: ViewContainerRef,
  ) { }
}
