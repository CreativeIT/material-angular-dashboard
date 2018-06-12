import { Component, Input } from '@angular/core';

import { BaseSidebarComponent } from 'theme/components/sidebar/sidebar.component';

@Component({
  selector: 'app-sidebar',
  styleUrls: ['../../../theme/components/sidebar/sidebar.component.scss'],
  templateUrl: '../../../theme/components/sidebar/sidebar.component.html',
})
export class SidebarComponent extends BaseSidebarComponent {
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
