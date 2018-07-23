import { Component, HostBinding } from '@angular/core';

import { UpgradeDomAfterViewInit } from 'helpers';

@Component({
  selector: 'page-forgot-password',
  styleUrls: ['./forgot-password.component.scss'],
  templateUrl: './forgot-password.component.html',
})
@UpgradeDomAfterViewInit
export class ForgotPasswordComponent {
  @HostBinding('style.margin') private margin = 'auto';
}
