import { AfterViewInit, Component } from '@angular/core';

@Component({ })
export abstract class UpgradableComponent implements AfterViewInit {
  public ngAfterViewInit() {
    componentHandler.upgradeDom();
  }
}
