import { AfterViewInit, Component } from '@angular/core';

declare var componentHandler: any;

@Component({
  template: '',
})
export abstract class UpgradableComponent implements AfterViewInit {
  public ngAfterViewInit() {
    componentHandler.upgradeDom();
  }
}
