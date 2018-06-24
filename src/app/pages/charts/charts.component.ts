import { Component } from '@angular/core';

import { HostClassBinding, UpgradeDomAfterViewInit } from 'helpers';

@Component({
  selector: 'app-charts',
  styleUrls: ['./charts.component.scss'],
  templateUrl: './charts.component.html',
})
@HostClassBinding('mdl-grid charts')
@UpgradeDomAfterViewInit
export class ChartsComponent { }
