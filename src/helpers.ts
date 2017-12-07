import 'material-design-lite/material';

import { AfterViewInit } from '@angular/core';

export class UpgradeDomAfterViewInit implements AfterViewInit {
  public ngAfterViewInit() {
    componentHandler.upgradeDom();
  }
}
