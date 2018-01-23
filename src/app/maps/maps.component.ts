import { Component } from '@angular/core';

import { UpgradeDomAfterViewInit } from 'helpers';

@Component({
  selector: 'app-maps',
  template: `<app-map></app-map>`,
})
@UpgradeDomAfterViewInit
export class MapsComponent {}
