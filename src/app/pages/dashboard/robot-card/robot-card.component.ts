import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-robot-card',
  styleUrls: ['./robot-card.component.scss'],
  templateUrl: './robot-card.component.html',
})
export class RobotCardComponent {
  @HostBinding('class.robot') private readonly robot = true;
}
