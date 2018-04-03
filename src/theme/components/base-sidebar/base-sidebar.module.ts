import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BaseSidebarComponent } from './base-sidebar.component';
import { BaseMenuItemComponent } from './base-menu-item.component';
import { BaseMenuLinkItemComponent } from './base-menu-link-item.component';
import { BaseSubmenuItemComponent } from './base-submenu-item.component';

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
  ],
})
export class BaseSidebarModule { }
