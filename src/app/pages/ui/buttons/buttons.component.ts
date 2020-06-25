import { Component, HostBinding } from '@angular/core';

import { UpgradableComponent } from 'theme/components/upgradable';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent extends UpgradableComponent {
  @HostBinding('class.mdl-grid') public readonly mdlGrid = true;
  @HostBinding('class.ui-buttons') public readonly uiButtons = true;

  public colors1 = [
    'light-blue',
    'teal',
    'orange',
    'red',
    'green',
    'purple',
  ];
  public colors2 = [
    'light-blue',
    'teal',
    'orange',
    'red',
    'purple',
    'white',
  ];
  public actions = [
    'archive',
    'create',
    'drafts',
    'forward',
    'attach',
    'reply',
  ];
  public icons1 = [
    'assignment_returned',
    'create',
    'drafts',
    'forward',
    'attach_file',
    'reply',
  ];
  public icons2 = [
    'assignment_returned',
    'create',
    'drafts',
    'forward',
    'reply',
    'send',
  ];
  public socials = [
    'facebook',
    'twitter',
    'dribbble',
    'behance',
    'linkedin',
    'github',
  ];

  public buttonsWithIcons = this.colors1.map((color, i) => ({ color, action: this.actions[i], icon: this.icons1[i] }));
  public iconButtons = this.colors2.map((color, i) => ({ color, icon: this.icons2[i] }));
}
