import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'base-submenu-item',
  styleUrls: ['./sidebar.component.scss'],
  template: `
    <a class="mdl-navigation__link" [class.mdl-navigation__link--current]="shown" (click)="shown = !shown">
    <i *ngIf="data.icon" class="material-icons">{{ data.icon }}</i>{{ data.name }}<i class="material-icons">keyboard_arrow_down</i>
    </a>
    <div class="mdl-navigation">
    <base-menu-item *ngFor="let child of data.children" [data]="child"></base-menu-item>
    </div>
  `,
})
export class SubmenuItemComponent implements OnInit {
  @HostBinding('class.sub-navigation') private readonly subNavigation = true;
  @HostBinding('class.sub-navigation--show') private get subNavigationShow() {
    return this.shown;
  }

  @Input() public data;

  public shown = false;

  constructor(
    private router: Router,
  ) { }

  public ngOnInit() {
    this.shown = this.hasCurrent(this.data.children);
  }

  private hasCurrent(list) {
    return list.some(item => (item.link && item.link === this.router.url) || (item.children && this.hasCurrent(item.children)));
  }
}
