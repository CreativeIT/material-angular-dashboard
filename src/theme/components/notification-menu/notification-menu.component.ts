import { Component, HostBinding } from '@angular/core';

import { NotificationMenuService } from './notification-menu.service';

@Component({
  selector: 'base-notification-menu',
  styleUrls: ['./notification-menu.component.scss'],
  templateUrl: './notification-menu.component.html',
  providers: [NotificationMenuService],
})
export class NotificationMenuComponent {
  @HostBinding('style.position') private position = 'relative';

  public notifications: Object[];

  constructor(notificationMenuService: NotificationMenuService) {
    this.notifications = notificationMenuService.getNotifications();
  }
}
