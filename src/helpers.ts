import 'material-design-lite/material';

import { AfterViewInit, HostBinding } from '@angular/core';

export function UpgradeDomAfterViewInit(Target) {
  const ngAfterViewInit = Target.prototype.ngAfterViewInit;
  Target.prototype.ngAfterViewInit = function () {
    if (ngAfterViewInit) {
      ngAfterViewInit.call(this);
    }
    componentHandler.upgradeDom();
  };
}
