import { Component } from '@angular/core';

import { UpgradableComponent } from 'theme/components/upgradable';

@Component({
  selector: 'app-maps',
  template: `<div class="mdl-cell mdl-cell--6-col-desktop mdl-cell--8-col-tablet mdl-cell--4-col-phone"><app-map></app-map></div>`,
})
export class MapsComponent extends UpgradableComponent { }
