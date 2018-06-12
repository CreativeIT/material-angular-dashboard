import { Component } from '@angular/core';
import { BaseNotificationMenuService } from './notification-menu.service';

@Component({
  selector: 'base-notification-menu',
  styleUrls: ['./notification-menu.component.scss'],
  templateUrl: './notification-menu.component.html',
  providers: [BaseNotificationMenuService],
})
export class BaseNotificationMenuComponent {
  public notifications: Object[];

  constructor(baseNotificationMenuService: BaseNotificationMenuService) {
    this.notifications = baseNotificationMenuService.getNotifications();
  }
}
