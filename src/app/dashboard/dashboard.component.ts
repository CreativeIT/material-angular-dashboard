import { Component } from '@angular/core';

import { HostClassBinding, UpgradeDomAfterViewInit } from 'helpers';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
@HostClassBinding('mdl-grid mdl-grid--no-spacing')
@UpgradeDomAfterViewInit
export class DashboardComponent { }
