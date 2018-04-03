import { Component, Input } from '@angular/core';

import { HostClassBinding } from 'helpers';

@Component({
  selector: 'base-sidebar',
  styleUrls: ['./base-sidebar.component.scss'],
  templateUrl: './base-sidebar.component.html',
})
@HostClassBinding('mdl-layout__drawer')
export class BaseSidebarComponent {
  // TODO: move away from theme
  menu = [
    { name: 'Dashboard', link: '/app/dashboard', icon: 'dashboard' },
    {
      name: 'UI',
      children: [
        ...(uis => uis.map(ui => ({
          name: ui[0].toUpperCase() + ui.slice(1),
          link: `/ui/${ui}`,
        })))([
          'buttons',
          'cards',
          'colors',
          'forms',
          'icons',
          'typography',
          'tables',
        ]),
      ],
      icon: 'view_comfy',
    },
    { name: 'Account', link: '/app/forms', icon: 'person' },
    { name: 'Maps', link: '/app/maps', icon: 'map' },
    { name: 'Charts', link: '/app/charts', icon: 'multiline_chart' },
  ];
}
