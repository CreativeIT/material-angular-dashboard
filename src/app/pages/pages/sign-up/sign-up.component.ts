import { Component, HostBinding } from '@angular/core';

import { UpgradeDomAfterViewInit } from 'helpers';

@Component({
  selector: 'page-sign-up',
  styleUrls: ['./sign-up.component.scss'],
  templateUrl: './sign-up.component.html',
})
@UpgradeDomAfterViewInit
export class SignUpComponent {
  @HostBinding('style.margin') private margin = 'auto';
}
