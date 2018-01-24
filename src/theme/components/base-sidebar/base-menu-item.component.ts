import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

import { HostClassBinding } from 'helpers';

@Component({
  selector: 'base-menu-item',
  styleUrls: ['./base-sidebar.component.scss'],
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
    if ((layout.drawer_.getAttribute('aria-hidden') !== 'true')) {
      layout.toggleDrawer();
    }
  }
}

@Component({
  selector: 'base-menu-link-item',
  styleUrls: ['./base-sidebar.component.scss'],
  template: `
    <a
      *ngIf="data.link"
      class="mdl-navigation__link"
      [routerLink]="data.link"
      (click)="navigate()"
      [class.mdl-navigation__link--current]="router.url === data.link">
      <i *ngIf="data.icon" class="material-icons" role="presentation">{{data.icon}}</i>
      {{data.name}}
    </a>
    <a
      *ngIf="data.href"
      class="mdl-navigation__link"
      [href]="data.href"
      (click)="navigate()"
      [class.mdl-navigation__link--current]="router.url === data.link">
      <i *ngIf="data.icon" class="material-icons" role="presentation">{{data.icon}}</i>
      {{data.name}}
    </a>
  `,
})
export class BaseMenuLinkItemComponent extends BaseMenuItemComponent { }

@Component({
  selector: 'base-submenu-item',
  styleUrls: ['./base-sidebar.component.scss'],
  template: `
    <a class="mdl-navigation__link" [class.mdl-navigation__link--current]="shown">
      <i *ngIf="data.icon" class="material-icons">{{data.icon}}</i>{{data.name}}<i class="material-icons">keyboard_arrow_down</i>
    </a>
    <div class="mdl-navigation">
      <base-menu-item *ngFor="let child of data.children" [data]="child"></base-menu-item>
    </div>
  `,
})
@HostClassBinding(function() {
  return this.shown ? 'sub-navigation sub-navigation--show' : 'sub-navigation';
})
export class BaseSubmenuItemComponent extends BaseMenuItemComponent {
  @HostListener('click') onClick() {
    this.shown = !this.shown;
  }

  shown = false;
}
