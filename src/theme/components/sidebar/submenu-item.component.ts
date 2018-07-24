import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'base-submenu-item',
  styleUrls: ['./sidebar.component.scss'],
  template: `
    <div class="sub-navigation" [class.sub-navigation--show]="shown">
      <a class="mdl-navigation__link" [class.mdl-navigation__link--current]="shown" (click)="onClick()">
      <i *ngIf="data.icon" class="material-icons">{{ data.icon }}</i>{{ data.name }}<i class="material-icons">keyboard_arrow_down</i>
      </a>
      <div class="mdl-navigation">
      <base-menu-item *ngFor="let child of data.children" [data]="child"></base-menu-item>
      </div>
    </div>
  `,
})
export class SubmenuItemComponent implements OnInit {
  @Input() data;

  shown = false;

  constructor(
    protected router: Router,
  ) { }

  onClick() {
    this.shown = !this.shown;
  }

  ngOnInit() {
    this.shown = this.hasCurrent(this.data.children);
  }

  private hasCurrent(list) {
    return list.some(item => (item.link && item.link === this.router.url) || (item.children && this.hasCurrent(item.children)));
  }
}
