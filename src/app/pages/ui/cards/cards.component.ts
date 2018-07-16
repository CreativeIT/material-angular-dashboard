import { Component } from '@angular/core';

import { UpgradeDomAfterViewInit } from 'helpers';

@Component({
  selector: 'ui-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
@UpgradeDomAfterViewInit
export class CardsComponent { }
