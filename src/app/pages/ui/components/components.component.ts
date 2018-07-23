import { Component } from '@angular/core';

import { UpgradeDomAfterViewInit } from 'helpers';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
})
@UpgradeDomAfterViewInit
export class ComponentsComponent {
  data = [
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
