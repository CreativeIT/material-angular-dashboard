import { Component } from '@angular/core';

import { HostClassBinding } from 'helpers';

@Component({
  selector: 'app-weather',
  styleUrls: ['./weather.component.scss'],
  templateUrl: './weather.component.html',
})
@HostClassBinding('weather')
export class WeatherComponent { }
