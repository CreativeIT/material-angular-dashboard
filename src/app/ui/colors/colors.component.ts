import { Component } from '@angular/core';

import { HostClassBinding, UpgradeDomAfterViewInit } from 'helpers';

@Component({
  selector: 'ui-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
@HostClassBinding('mdl-grid ui-colors')
@UpgradeDomAfterViewInit
export class ColorsComponent { }
