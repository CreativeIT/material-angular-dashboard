import { Component, Input, ViewChild, ViewContainerRef, HostBinding } from '@angular/core';

@Component({
  selector: 'base-card base-card-menu',
  styleUrls: ['./card.component.scss'],
  template: `<ng-content></ng-content>`,
})
export class CardMenuComponent {
  @HostBinding('class.mdl-card__menu') private readonly mdlCardMenu = true;
}
