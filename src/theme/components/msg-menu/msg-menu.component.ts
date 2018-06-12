import { Component } from '@angular/core';
import { BaseMsgMenuService } from './msg-menu.service';

@Component({
  selector: 'base-msg-menu',
  styleUrls: ['./msg-menu.component.scss'],
  templateUrl: './msg-menu.component.html',
  providers: [BaseMsgMenuService],
})
export class BaseMsgMenuComponent {
  public messages: Object[];

  constructor(baseMsgMenuService: BaseMsgMenuService) {
    this.messages = baseMsgMenuService.getMessages();
  }
}
