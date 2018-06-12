import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';

import { HostClassBinding } from 'helpers';

@Component({
  selector: 'base-card base-card-menu',
  styleUrls: ['./card.component.scss'],
  template: `<ng-content></ng-content>`,
})
@HostClassBinding('mdl-card__menu')
export class BaseCardMenuComponent { }
