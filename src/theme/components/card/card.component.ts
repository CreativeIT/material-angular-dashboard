import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'base-card',
  styleUrls: ['./card.component.scss'],
  template: `<div class="mdl-card mdl-shadow--2dp"><ng-content></ng-content></div>`,
})
export class CardComponent {
  constructor(
    private viewContainerRef: ViewContainerRef,
  ) { }
}
