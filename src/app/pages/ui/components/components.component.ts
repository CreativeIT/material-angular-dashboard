import { Component } from '@angular/core';

import { HostClassBinding, UpgradeDomAfterViewInit } from 'helpers';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
})
@HostClassBinding('mdl-grid ui-components')
@UpgradeDomAfterViewInit
export class ComponentsComponent { }
