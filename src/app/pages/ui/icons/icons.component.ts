import { Component } from '@angular/core';

import { HostClassBinding, UpgradeDomAfterViewInit } from 'helpers';

@Component({
  selector: 'ui-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
})
@HostClassBinding('mdl-grid ui-icons')
@UpgradeDomAfterViewInit
export class IconsComponent { }
