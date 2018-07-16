import { Component } from '@angular/core';

import { UpgradeDomAfterViewInit } from 'helpers';

@Component({
  selector: 'ui-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
})
@UpgradeDomAfterViewInit
export class TablesComponent { }
