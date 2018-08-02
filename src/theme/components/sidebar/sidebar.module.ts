import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MenuItemComponent } from './menu-item.component';
import { MenuLinkItemComponent } from './menu-link-item.component';
import { SidebarComponent } from './sidebar.component';
import { SubmenuItemComponent } from './submenu-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  declarations: [
    SidebarComponent,
    MenuItemComponent,
    MenuLinkItemComponent,
    SubmenuItemComponent,
  ],
  exports: [
    SidebarComponent,
    MenuItemComponent,
    MenuLinkItemComponent,
    SubmenuItemComponent,
  ],
})
export class SidebarModule { }
