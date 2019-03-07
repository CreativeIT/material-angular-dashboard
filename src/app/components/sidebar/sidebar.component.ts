import { Component, Input } from '@angular/core';

import { SidebarComponent as BaseSidebarComponent } from 'theme/components/sidebar';

@Component({
  selector: 'app-sidebar',
  styleUrls: ['../../../theme/components/sidebar/sidebar.component.scss'],
  templateUrl: '../../../theme/components/sidebar/sidebar.component.html',
})
export class SidebarComponent extends BaseSidebarComponent {
  public title = 'darkboard';
  public menu = [
    { name: 'Dashboard', link: '/app/dashboard', icon: 'dashboard' },
    {
      name: 'UI',
      children: [
        ...[
          'buttons',
          'cards',
          'colors',
          'forms',
          'icons',
          'typography',
          'tables',
        ].map(ui => ({
          name: ui[0].toUpperCase() + ui.slice(1),
          link: `/ui/${ui}`,
        })),
      ],
      icon: 'view_comfy',
    },
    { name: 'Components', link: '/ui/components', icon: 'developer_board' },
    { name: 'Account', link: '/app/forms', icon: 'person' },
    {
      name: 'Maps', icon: 'map', children: [
      { name: 'Simple map', link: '/maps/simple' },
      { name: 'Advanced map', link: '/maps/advanced' },
      ],
    },
    { name: 'Charts', link: '/app/charts', icon: 'multiline_chart' },
    {
      name: 'Pages', children: [
      { name: 'Sign in', link: '/pages/login' },
      { name: 'Sign up', link: '/pages/sign-up' },
      { name: 'Forgot password', link: '/pages/forgot-password' },
      { name: '404', link: '/pages/error' },
      ],
      icon: 'pages',
    },
  ];
}
