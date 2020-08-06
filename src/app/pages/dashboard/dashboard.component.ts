import { Component, HostBinding, OnInit } from '@angular/core';

import { AuthService } from '@services/*';
import { UpgradableComponent } from 'theme/components/upgradable';

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
