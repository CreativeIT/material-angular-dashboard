import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'base-card base-card-menu',
  styleUrls: ['./card.component.scss'],
  template: `<div class="mdl-card__menu"><ng-content></ng-content></div>`,
})
export class BaseCardMenuComponent { }
