import { Component } from '@angular/core';
import { BaseMsgMenuService } from './base-msg-menu.service';

@Component({
  selector: 'base-msg-menu',
  styleUrls: ['./base-msg-menu.component.scss'],
  templateUrl: './base-msg-menu.component.html',
  providers: [BaseMsgMenuService],
})
export class BaseMsgMenuComponent {
  public messages: Object[];

  constructor(baseMsgMenuService: BaseMsgMenuService) {
    this.messages = baseMsgMenuService.getMessages();
  }
}
