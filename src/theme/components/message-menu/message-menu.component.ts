import { Component, HostBinding } from '@angular/core';

import { MessageMenuService } from './message-menu.service';

@Component({
  selector: 'base-message-menu',
  styleUrls: ['./message-menu.component.scss'],
  templateUrl: './message-menu.component.html',
  providers: [MessageMenuService],
})
export class MessageMenuComponent {
  @HostBinding('style.position') private position = 'relative';

  public messages: Object[];

  constructor(messageMenuService: MessageMenuService) {
    this.messages = messageMenuService.getMessages();
  }
}
