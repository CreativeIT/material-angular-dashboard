import { Component } from '@angular/core';

import { UpgradeDomAfterViewInit } from 'helpers';

@Component({
  selector: 'ui-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss'],
})
@UpgradeDomAfterViewInit
export class ColorsComponent { }
