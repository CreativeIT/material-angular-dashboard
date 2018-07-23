import { Component } from '@angular/core';

import { UpgradeDomAfterViewInit } from 'helpers';

@Component({
  selector: 'ui-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
@UpgradeDomAfterViewInit
export class FormsComponent { }
