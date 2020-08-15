import { Component, HostBinding, OnInit } from '@angular/core';

import { UpgradableComponent } from 'theme/components/upgradable';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent extends UpgradableComponent implements OnInit {
  @HostBinding('class.mdl-grid') public readonly mdlGrid = true;

  public user;

  constructor(public authService: AuthService) {
    super();
  }

  public ngOnInit() {
    this.authService.userData.subscribe(user => this.user = user);
  }
}
