import { Component, Input } from '@angular/core';

@Component({
  selector: 'base-card',
  styleUrls: ['./base-card.component.scss'],
  templateUrl: './base-card.component.html',
})
export class BaseCardComponent {
  public withActions = false;
  public titleExpand = false;
  public bodyExpand = false;

  @Input('with-actions') public set setWithActions(value) {
    this.withActions = true;
  }

  @Input('title-expand') public set setTitleExpand(value) {
    this.titleExpand = true;
  }

  @Input('body-expand') public set setBodyExpand(value) {
    this.bodyExpand = true;
  }
}
