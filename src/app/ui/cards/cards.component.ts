import { Component } from '@angular/core';

import { HostClassBinding, UpgradeDomAfterViewInit } from 'helpers';

@Component({
  selector: 'ui-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
@HostClassBinding('mdl-grid ui-cards')
@UpgradeDomAfterViewInit
export class CardsComponent { }
