import { Component } from '@angular/core';
import { BaseNotificationMenuService } from './base-notification-menu.service';

@Component({
  selector: 'base-notification-menu',
  styleUrls: ['./base-notification-menu.component.scss'],
  templateUrl: './base-notification-menu.component.html',
  providers: [BaseNotificationMenuService],
})
export class BaseNotificationMenuComponent {
  public notifications: Object[];

  constructor(baseNotificationMenuService: BaseNotificationMenuService) {
    this.notifications = baseNotificationMenuService.getNotifications();
  }
}
