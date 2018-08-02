import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-cotoneaster-card',
  styleUrls: ['./cotoneaster-card.component.scss'],
  templateUrl: './cotoneaster-card.component.html',
})
export class CotoneasterCardComponent {
  @HostBinding('class.cotoneaster') private readonly cotoneaster = true;
}
