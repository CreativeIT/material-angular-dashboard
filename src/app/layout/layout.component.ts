import { Component } from '@angular/core';

import { HostClassBinding } from 'helpers';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
@HostClassBinding('mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header is-small-screen')
export class LayoutComponent {}
