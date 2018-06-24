import { Component } from '@angular/core';

import { HostClassBinding } from 'helpers';

@Component({
  selector: 'page-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html',
})
@HostClassBinding('login')
export class LoginComponent { }
