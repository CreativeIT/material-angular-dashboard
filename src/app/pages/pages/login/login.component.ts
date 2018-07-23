import { Component, HostBinding } from '@angular/core';

import { UpgradeDomAfterViewInit } from 'helpers';

@Component({
  selector: 'page-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html',
})
@UpgradeDomAfterViewInit
export class LoginComponent {
  @HostBinding('style.margin') private margin = 'auto';
}
