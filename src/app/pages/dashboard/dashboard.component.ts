import { Component } from '@angular/core';

import { UpgradeDomAfterViewInit } from 'helpers';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
@UpgradeDomAfterViewInit
export class DashboardComponent { }
