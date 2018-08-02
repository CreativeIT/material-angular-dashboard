import { Component, Input, ViewChild, ViewContainerRef, HostBinding } from '@angular/core';

@Component({
  selector: 'base-card',
  styleUrls: ['./card.component.scss'],
  template: `<ng-content></ng-content>`,
})
export class CardComponent {
  @HostBinding('class.mdl-card') private readonly mdlCard = true;
  @HostBinding('class.mdl-shadow--2dp') private readonly mdlShadow2DP = true;

  constructor(
    private viewContainerRef: ViewContainerRef,
  ) { }
}
