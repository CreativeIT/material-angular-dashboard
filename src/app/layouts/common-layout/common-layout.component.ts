import { Component } from '@angular/core';

import { HostClassBinding } from 'helpers';

@Component({
  selector: 'app-common-layout',
  templateUrl: './common-layout.component.html',
})
@HostClassBinding('mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header has-drawer')
export class CommonLayoutComponent { }
