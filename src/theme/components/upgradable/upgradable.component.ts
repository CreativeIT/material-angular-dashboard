import { Component, AfterViewInit } from '@angular/core';

@Component({ })
export abstract class UpgradableComponent implements AfterViewInit {
  public ngAfterViewInit() {
    componentHandler.upgradeDom();
  }
}
