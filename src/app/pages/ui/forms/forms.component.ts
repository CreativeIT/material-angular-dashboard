import { Component } from '@angular/core';

import { HostClassBinding, UpgradeDomAfterViewInit } from 'helpers';

@Component({
  selector: 'ui-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
@HostClassBinding('mdl-grid mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone mdl-cell--top')
@UpgradeDomAfterViewInit
export class FormsComponent { }
