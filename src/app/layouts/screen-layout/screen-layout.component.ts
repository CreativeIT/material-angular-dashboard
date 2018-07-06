import { Component } from '@angular/core';

import { HostClassBinding } from 'helpers';

@Component({
  selector: 'app-screen-layout',
  styleUrls: ['./screen-layout.component.scss'],
  templateUrl: './screen-layout.component.html',
})
@HostClassBinding('mdl-layout mdl-js-layout')
export class ScreenLayoutComponent { }
