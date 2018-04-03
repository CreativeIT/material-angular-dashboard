import { Component } from '@angular/core';

import { HostClassBinding } from 'helpers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
@HostClassBinding('mdl-layout mdl-js-layout color--gray is-small-screen login')
export class LoginComponent { }
