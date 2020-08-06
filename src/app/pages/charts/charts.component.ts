import { Component, HostBinding } from '@angular/core';

import { UpgradableComponent } from 'theme/components/upgradable';

@Component({
  selector: 'app-charts',
  styleUrls: ['./charts.component.scss'],
  templateUrl: './charts.component.html',
})
export class ChartsComponent extends UpgradableComponent {
  @HostBinding('class.mdl-grid') public readonly mdlGrid = true;
  @HostBinding('class.charts') public readonly charts = true;
}
