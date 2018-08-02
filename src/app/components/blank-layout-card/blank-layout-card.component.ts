import { Component, HostBinding } from '@angular/core';

import { UpgradableComponent } from 'theme/components/upgradable';

@Component({ })
export abstract class BlankLayoutCardComponent extends UpgradableComponent {
  @HostBinding('class.blank-layout-card') protected readonly blankLayoutCard = true;
}
