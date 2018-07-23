import { Component } from '@angular/core';

import { UpgradeDomAfterViewInit } from 'helpers';

@Component({
  selector: 'ui-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
@UpgradeDomAfterViewInit
export class ButtonsComponent {
  private colors1 = [
    'light-blue',
    'teal',
    'orange',
    'red',
    'green',
    'purple',
  ];
  private colors2 = [
    'light-blue',
    'teal',
    'orange',
    'red',
    'purple',
    'white',
  ];
  private actions = [
    'archive',
    'create',
    'drafts',
    'forward',
    'attach',
    'reply',
  ];
  private icons1 = [
    'assignment_returned',
    'create',
    'drafts',
    'forward',
    'attach_file',
    'reply',
  ];
  private icons2 = [
    'assignment_returned',
    'create',
    'drafts',
    'forward',
    'reply',
    'send',
  ];
  private socials = [
    'facebook',
    'twitter',
    'dribbble',
    'behance',
    'linkedin',
    'github',
  ];

  private buttonsWithIcons = this.colors1.map((color, i) => ({ color, action: this.actions[i], icon: this.icons1[i] }));
  private iconButtons = this.colors2.map((color, i) => ({ color, icon: this.icons2[i] }));
}
