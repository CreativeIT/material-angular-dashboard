import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

@Component({
  selector: 'base-right-sidebar',
  styleUrls: ['./sidebar.component.scss'],
  templateUrl: './sidebar.component.html',
})
export class RightSidebarComponent {
  @Input() public title;
  @Output() public toggleSidebar = new EventEmitter();

  @HostBinding('class.is-closed') public isClosed = false;

  public closeSidebar() {
    this.isClosed = true;
  }

  public openSidebar() {
    this.isClosed = false;
  }
}
