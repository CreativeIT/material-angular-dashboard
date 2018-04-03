import { Component, HostListener, Input } from '@angular/core';

import { HostClassBinding } from 'helpers';

import { BaseMenuItemComponent } from './base-menu-item.component';

@Component({
  selector: 'base-submenu-item',
  styleUrls: ['./base-sidebar.component.scss'],
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
  return this.shown ? 'sub-navigation sub-navigation--show' : 'sub-navigation';
})
export class BaseSubmenuItemComponent extends BaseMenuItemComponent {
  shown = false;

  @HostListener('click') onClick() {
    this.shown = !this.shown;
  }
}
