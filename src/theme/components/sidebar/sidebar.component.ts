import { Component, Input } from '@angular/core';

import { HostClassBinding } from 'helpers';

@Component({
  selector: 'base-sidebar',
  styleUrls: ['./sidebar.component.scss'],
  templateUrl: './sidebar.component.html',
})
@HostClassBinding('mdl-layout__drawer')
export class BaseSidebarComponent {
  @Input() menu;
}
