import { Component, HostBinding, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'base-card base-card-title',
  styleUrls: ['./card.component.scss'],
  template: `<ng-content></ng-content>`,
})
export class CardTitleComponent {
  @HostBinding('class.mdl-card__title') public readonly mdlCardTitle = true;

  @HostBinding('class.mdl-card--expand') public isExpanded = false;

  @Input() set expanded(value) {
    if (value || value === '') {
      this.isExpanded = true;
    }
  }
}
