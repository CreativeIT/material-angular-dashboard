import { Component, HostBinding } from '@angular/core';

import { UpgradableComponent } from 'theme/components/upgradable';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
})
export class ComponentsComponent extends UpgradableComponent {
  @HostBinding('class.mdl-grid') public readonly mdlGrid = true;
  @HostBinding('class.ui-components') public readonly uiComponents = true;

  public data = [
    {
      name: 'Nathan Fillion',
      description: 'Malcolm “Mal” Reynolds',
      image: 'nathan-fillion.png',
    },
    {
      name: 'Gina Torres',
      description: 'Zoe Alleyne Washburne',
      image: 'gina-torres.png',
    },
    {
      name: 'Alan Tudyk',
      description: 'Hoban “Wash” Washburne',
      image: 'tudyk.png',
    },
  ];
}
