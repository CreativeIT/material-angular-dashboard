import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';

import { HostClassBinding } from 'helpers';

@Component({
  selector: 'base-card',
  styleUrls: ['./card.component.scss'],
  template: `<ng-content></ng-content>`,
})
@HostClassBinding('mdl-card mdl-shadow--2dp', true)
export class BaseCardComponent {
  constructor(
    private viewContainerRef: ViewContainerRef,
  ) { }
}
