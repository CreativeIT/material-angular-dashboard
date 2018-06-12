import { Component } from '@angular/core';

import { HostClassBinding } from 'helpers';

@Component({
  selector: 'app-robot-card',
  styleUrls: ['./robot-card.component.scss'],
  templateUrl: './robot-card.component.html',
})
@HostClassBinding('robot')
export class RobotCardComponent { }
