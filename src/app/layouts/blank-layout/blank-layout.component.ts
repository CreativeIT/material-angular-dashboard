import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blank-layout',
  styleUrls: ['./blank-layout.component.scss'],
  templateUrl: './blank-layout.component.html',
})
export class BlankLayoutComponent {
  // FIXME: responsibility leak
  @HostBinding('class.not-found') public get notFound() {
    return this.router.url === '/pages/404';
  }

  constructor(
    public router: Router,
  ) { }
}
