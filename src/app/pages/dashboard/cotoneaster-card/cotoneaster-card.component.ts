import { Component } from '@angular/core';

import { HostClassBinding } from 'helpers';

@Component({
  selector: 'app-cotoneaster-card',
  styleUrls: ['./cotoneaster-card.component.scss'],
  templateUrl: './cotoneaster-card.component.html',
})
@HostClassBinding('cotoneaster')
export class CotoneasterCardComponent { }
