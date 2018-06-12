import { Component } from '@angular/core';

import { HostClassBinding } from 'helpers';

@Component({
  selector: 'app-trending',
  styleUrls: ['./trending.component.scss'],
  templateUrl: './trending.component.html',
})
@HostClassBinding('trending')
export class TrendingComponent { }
