import { Component } from '@angular/core';

import { HostClassBinding } from 'helpers';

@Component({
  selector: 'page-error',
  styleUrls: ['./error.component.scss'],
  templateUrl: './error.component.html',
})
@HostClassBinding('not-found')
export class ErrorComponent { }
