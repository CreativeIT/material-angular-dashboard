import { Component, HostListener, Input } from '@angular/core';

import { BaseMenuItemComponent } from './base-menu-item.component';

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
      <i *ngIf="data.icon" class="material-icons" role="presentation">{{ data.icon }}</i>
      {{ data.name }}
    </a>
    <a
      *ngIf="data.href"
      class="mdl-navigation__link"
      [href]="data.href"
      (click)="navigate()"
      [class.mdl-navigation__link--current]="router.url === data.link">
      <i *ngIf="data.icon" class="material-icons" role="presentation">{{ data.icon }}</i>
      {{ data.name }}
    </a>
  `,
})
export class BaseMenuLinkItemComponent extends BaseMenuItemComponent { }
