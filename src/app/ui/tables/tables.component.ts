import { Component } from '@angular/core';

import { HostClassBinding, UpgradeDomAfterViewInit } from 'helpers';

@Component({
  selector: 'ui-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
})
@HostClassBinding('mdl-grid mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone mdl-cell--top')
@UpgradeDomAfterViewInit
export class TablesComponent { }
