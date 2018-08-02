import { Component, HostBinding, Input, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'base-card base-card-actions',
  styleUrls: ['./card.component.scss'],
  template: `<ng-content></ng-content>`,
})
export class CardActionsComponent {
  @HostBinding('class.mdl-card__actions') private readonly mdlCardActions = true;

  constructor(
    private viewContainerRef: ViewContainerRef,
  ) { }
}
