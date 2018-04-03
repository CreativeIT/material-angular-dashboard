import { Component } from '@angular/core';

import { HostClassBinding, UpgradeDomAfterViewInit } from 'helpers';

@Component({
  selector: 'ui-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
@HostClassBinding('mdl-grid ui-buttons')
@UpgradeDomAfterViewInit
export class ButtonsComponent { }
