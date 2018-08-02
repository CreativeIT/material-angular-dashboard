import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CommonLayoutComponent } from './common-layout';
import { BlankLayoutComponent } from './blank-layout';
import { ThemeModule } from 'theme';
import { SidebarComponent } from 'app/components/sidebar';
import { MessageMenuComponent } from 'app/components/message-menu';
import { NotificationMenuComponent } from 'app/components/notification-menu';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    RouterModule,
  ],
  declarations: [
    CommonLayoutComponent,
    BlankLayoutComponent,
    SidebarComponent,
    MessageMenuComponent,
    NotificationMenuComponent,
  ],
  exports: [
    CommonLayoutComponent,
    BlankLayoutComponent,
  ],
})
export class LayoutsModule { }
