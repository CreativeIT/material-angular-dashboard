import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

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
      *ngIf="link"
      class="mdl-navigation__link"
      [routerLink]="link"
      (click)="navigate()"
      [class.mdl-navigation__link--current]="this.router.url === link">
      <i *ngIf="icon" class="material-icons" role="presentation">{{icon}}</i>
      {{name}}
    </a>
    <a
      *ngIf="href"
      class="mdl-navigation__link"
      [href]="href"
      (click)="navigate()"
      [class.mdl-navigation__link--current]="this.router.url === link">
      <i *ngIf="icon" class="material-icons" role="presentation">{{icon}}</i>
      {{name}}
    </a>
  `,
})
export class BaseMenuLinkItemComponent extends BaseMenuItemComponent {
  @Input() set data(value) {
    Object.assign(this as any, value);
  }
}

@Component({
  selector: 'base-submenu-item',
  styleUrls: ['./base-sidebar.component.scss'],
  template: `
    <div
      *ngIf="children"
      class="sub-navigation"
      [class.sub-navigation--show]="shown"
      (click)="shown= !shown">
      <a class="mdl-navigation__link" [class.mdl-navigation__link--current]="shown">
        <i *ngIf="icon" class="material-icons">{{icon}}</i>{{name}}<i class="material-icons">keyboard_arrow_down</i>
      </a>
      <div class="mdl-navigation">
        <base-menu-item *ngFor="let child of children" [data]="child"></base-menu-item>
      </div>
    </div>
  `,
})
export class BaseSubmenuItemComponent extends BaseMenuItemComponent {
  @Input() set data(value) {
    Object.assign(this as any, value);
  }

  shown = false;
}
