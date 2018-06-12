
import { Component } from '@angular/core';

import { HostClassBinding } from 'helpers';

@Component({
  selector: 'base-page-top',
  styleUrls: ['./page-top.component.scss'],
  templateUrl: './page-top.component.html',
})
@HostClassBinding('mdl-layout__header')
export class BasePageTopComponent { }
