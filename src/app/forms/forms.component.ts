import { Component } from '@angular/core';

import { UpgradeDomAfterViewInit } from 'helpers';

@Component({
  selector: 'app-forms',
  template: `<app-employer-form></app-employer-form>`,
})
@UpgradeDomAfterViewInit
export class FormsComponent {}
