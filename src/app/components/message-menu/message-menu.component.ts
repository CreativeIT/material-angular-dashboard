import { Component, HostBinding } from '@angular/core';

import { MessageMenuService } from './message-menu.service';

@Component({
  selector: 'app-message-menu',
  styleUrls: ['./message-menu.component.scss'],
  templateUrl: './message-menu.component.html',
  providers: [MessageMenuService],
})
export class MessageMenuComponent {
  @HostBinding('class.message-menu') private readonly messageMenu = true;

  private messages: object[];

  constructor(messageMenuService: MessageMenuService) {
    this.messages = messageMenuService.getMessages();
  }
}
