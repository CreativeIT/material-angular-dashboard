import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BaseSidebarComponent } from './sidebar.component';
import { BaseMenuItemComponent } from './menu-item.component';
import { BaseMenuLinkItemComponent } from './menu-link-item.component';
import { BaseSubmenuItemComponent } from './submenu-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  declarations: [
    BaseSidebarComponent,
    BaseMenuItemComponent,
    BaseMenuLinkItemComponent,
    BaseSubmenuItemComponent,
  ],
  exports: [
    BaseSidebarComponent,
    BaseMenuItemComponent,
    BaseMenuLinkItemComponent,
    BaseSubmenuItemComponent,
  ],
})
export class BaseSidebarModule { }
