import { Component, Input } from '@angular/core';

import { HostClassBinding } from 'helpers';

@Component({
  selector: 'base-sidebar',
  styleUrls: ['./base-sidebar.component.scss'],
  templateUrl: './base-sidebar.component.html'
})
@HostClassBinding('mdl-layout__drawer')
export class BaseSidebarComponent {
  private menu = [
    { name: 'Dashboard', link: '/app/dashboard', icon: 'dashboard' },
    { name: 'UI', children: [
        ...(uis => uis.map(ui => ({
          name: ui[0].toUpperCase() + ui.slice(1),
          link: `/app/${ui}`,
        })))([
          'buttons',
          'cards',
          'colors',
          'components',
          'icons',
          'typography',
        ]),
      ], icon: 'view_comfy' },
    { name: 'Account', link: '/app/forms', icon: 'person' },
    { name: 'Maps', link: '/app/maps', icon: 'map' },
    { name: 'Charts', link: '/app/charts', icon: 'multiline_chart' },
  ];
}
