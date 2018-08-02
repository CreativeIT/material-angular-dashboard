import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-weather',
  styleUrls: ['./weather.component.scss'],
  templateUrl: './weather.component.html',
})
export class WeatherComponent {
  @HostBinding('class.weather') private readonly weather = true;
}
