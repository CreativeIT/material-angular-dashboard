import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'base-card base-card-actions',
  styleUrls: ['./card.component.scss'],
  template: `<div class="mdl-card__actions"><ng-content></ng-content></div>`,
})
export class BaseCardActionsComponent {
  constructor(
    private viewContainerRef: ViewContainerRef,
  ) { }
}
