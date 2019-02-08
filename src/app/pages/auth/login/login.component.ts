import { Component, HostBinding } from '@angular/core';

import { BlankLayoutCardComponent } from 'app/components/blank-layout-card';

@Component({
  selector: 'app-login',
  styleUrls: ['../../../components/blank-layout-card/blank-layout-card.component.scss'],
  templateUrl: './login.component.html',
})
export class LoginComponent extends BlankLayoutCardComponent { }
