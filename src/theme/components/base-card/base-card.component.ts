import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';

import { HostClassBinding } from 'helpers';

@Component({
  selector: 'base-card',
  styleUrls: ['./base-card.component.scss'],
  template: `<ng-content></ng-content>`,
})
@HostClassBinding('mdl-card mdl-shadow--2dp', true)
export class BaseCardComponent {
  constructor(
    private viewContainerRef: ViewContainerRef,
  ) { }
}

@Component({
  selector: 'base-card base-card-title',
  styleUrls: ['./base-card.component.scss'],
  template: `<ng-content></ng-content>`,
})
@HostClassBinding(function () {
  return `mdl-card__title ${this._expanded ? 'mdl-card--expand' : ''}`;
})
export class BaseCardTitleComponent {
  private _expanded = false;

  @Input() set expanded(value) {
    if (value || value === '') this._expanded = true;
  }
}

@Component({
  selector: 'base-card base-card-menu',
  styleUrls: ['./base-card.component.scss'],
  template: `<ng-content></ng-content>`,
})
@HostClassBinding('mdl-card__menu')
export class BaseCardMenuComponent { }

@Component({
  selector: 'base-card base-card-body',
  styleUrls: ['./base-card.component.scss'],
  template: `<ng-content></ng-content>`,
})
@HostClassBinding(function () {
  return `mdl-card__supporting-text ${this._expanded ? 'mdl-card--expand' : ''}`;
})
export class BaseCardBodyComponent {
  private _expanded = false;

  @Input() set expanded(value) {
    if (value || value === '') this._expanded = true;
  }
}

@Component({
  selector: 'base-card base-card-actions',
  styleUrls: ['./base-card.component.scss'],
  template: `<ng-content></ng-content>`,
})
@HostClassBinding('mdl-card__actions', true)
export class BaseCardActionsComponent {
  constructor(
    private viewContainerRef: ViewContainerRef,
  ) { }
}
