import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

import { HostClassBinding } from 'helpers';

@Component({
  selector: 'base-menu-item',
  styleUrls: ['./sidebar.component.scss'],
  template: `
    <base-menu-link-item *ngIf="data.link || data.href" [data]="data"></base-menu-link-item>
    <base-submenu-item *ngIf="data.children" [data]="data"></base-submenu-item>
  `,
})
export class BaseMenuItemComponent {
  @Input() data;

  constructor(
    private router: Router,
  ) { }

  private navigate() {
    const layout = (document.querySelector('.mdl-layout') as any).MaterialLayout;
    // FIXME: drawer is undefined
    if (layout.drawer_ && layout.drawer_.getAttribute('aria-hidden') !== 'true') {
      layout.toggleDrawer();
    }
  }
}
