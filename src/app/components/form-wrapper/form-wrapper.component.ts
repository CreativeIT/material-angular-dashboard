import { Component } from '@angular/core';
import { UpgradableComponent } from '../../../theme/components/upgradable/upgradable.component';

@Component({
  selector: 'app-form-wrapper',
  styleUrls: ['./form-wrapper.component.scss'],
  template: `<router-outlet></router-outlet>`,
})
export class FormWrapperComponent extends UpgradableComponent { }
