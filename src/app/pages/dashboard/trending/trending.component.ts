import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-trending',
  styleUrls: ['./trending.component.scss'],
  templateUrl: './trending.component.html',
})
export class TrendingComponent {
  @HostBinding('class.trending') public readonly trending = true;
}
