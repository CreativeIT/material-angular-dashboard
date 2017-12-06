import { Component } from '@angular/core';

import { UpgradeDomAfterViewInit } from 'helpers';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent extends UpgradeDomAfterViewInit {}
