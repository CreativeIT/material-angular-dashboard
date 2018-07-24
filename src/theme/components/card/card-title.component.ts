import { Component, Input, ViewChild, HostBinding } from '@angular/core';

@Component({
  selector: 'base-card base-card-title',
  styleUrls: ['./card.component.scss'],
  template: `<div class="mdl-card__title" [class.mdl-card--expand]="isExpanded"><ng-content></ng-content></div>`,
})
export class CardTitleComponent {
  private isExpanded = false;

  // FIXME: make NG components "through" for DOM-hierarchy instead of throwing properties manually

  @HostBinding('style.display') private get display() {
    return this.isExpanded ? 'flex' : undefined;
  }

  @HostBinding('style.flex-grow') private get flexGrow() {
    return this.isExpanded ? 1 : undefined;
  }

  @Input() set expanded(value) {
    if (value || value === '') {
      this.isExpanded = true;
    }
  }
}
