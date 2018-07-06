import { Component, HostListener, Input, AfterContentChecked } from '@angular/core';

import { HostClassBinding } from 'helpers';

import { BaseMenuItemComponent } from './menu-item.component';

@Component({
  selector: 'base-submenu-item',
  styleUrls: ['./sidebar.component.scss'],
  template: `
    <a class="mdl-navigation__link" [class.mdl-navigation__link--current]="shown">
      <i *ngIf="data.icon" class="material-icons">{{ data.icon }}</i>{{ data.name }}<i class="material-icons">keyboard_arrow_down</i>
    </a>
    <div class="mdl-navigation">
      <base-menu-item *ngFor="let child of data.children" [data]="child"></base-menu-item>
    </div>
  `,
})
@HostClassBinding(function () {
  return this.shown || this.isHasCurrent ? 'sub-navigation sub-navigation--show' : 'sub-navigation';
})
export class BaseSubmenuItemComponent extends BaseMenuItemComponent implements AfterContentChecked {
  shown = false;
  isHasCurrent = false;

  @HostListener('click') onClick() {
    this.shown = !this.shown;
  }

  ngAfterContentChecked() {
    this.isHasCurrent = this.hasCurrent(this.data.children);
  }

  private hasCurrent(list) {
    return list.some(item => (item.link && item.link === this.router.url) || (item.children && this.hasCurrent(item.children)));
  }
}
