import { Component, HostBinding } from '@angular/core';

import { UpgradeDomAfterViewInit } from 'helpers';

@Component({
  selector: 'page-error',
  styleUrls: ['./error.component.scss'],
  templateUrl: './error.component.html',
})
@UpgradeDomAfterViewInit
export class ErrorComponent {
  @HostBinding('style.margin') private margin = 'auto';
}
