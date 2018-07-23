import { Component } from '@angular/core';

import { UpgradeDomAfterViewInit } from 'helpers';

@Component({
  selector: 'ui-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss'],
})
@UpgradeDomAfterViewInit
export class TypographyComponent { }
