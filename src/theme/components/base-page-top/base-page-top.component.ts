import { Component } from '@angular/core';

import { HostClassBinding } from 'helpers';

@Component({
  selector: 'base-page-top',
  styleUrls: ['./base-page-top.component.scss'],
  templateUrl: './base-page-top.component.html'
})
@HostClassBinding('mdl-layout__header-row')
export class BasePageTopComponent { }
