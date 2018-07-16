import { Component } from '@angular/core';

import { UpgradeDomAfterViewInit } from 'helpers';

@Component({
  selector: 'ui-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
})
@UpgradeDomAfterViewInit
export class IconsComponent { }
