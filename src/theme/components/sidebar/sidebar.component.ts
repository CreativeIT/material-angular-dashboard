import { Component, Input } from '@angular/core';

@Component({
  selector: 'base-sidebar',
  styleUrls: ['./sidebar.component.scss'],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  @Input() public menu;
  @Input() public title = 'darkboard';
}
