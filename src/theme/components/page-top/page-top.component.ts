import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'base-page-top',
  styleUrls: ['./page-top.component.scss'],
  template: `<ng-content></ng-content>`,
})
export class PageTopComponent {
  @HostBinding('class.mdl-layout__header-row') protected readonly mdlLayoutHeaderRow = true;
}
