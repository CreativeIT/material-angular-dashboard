import { AfterViewInit, Component } from '@angular/core';

@Component({
  template: '',
})
export abstract class UpgradableComponent implements AfterViewInit {
  public ngAfterViewInit() {
    componentHandler.upgradeDom();
  }
}
