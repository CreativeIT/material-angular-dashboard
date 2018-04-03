import { Component } from '@angular/core';

import { HostClassBinding, UpgradeDomAfterViewInit } from 'helpers';

@Component({
  selector: 'ui-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss']
})
@HostClassBinding('mdl-grid ui-typography')
@UpgradeDomAfterViewInit
export class TypographyComponent { }
