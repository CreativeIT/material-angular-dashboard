import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CommonLayoutComponent } from './common-layout/common-layout.component';
import { ScreenLayoutComponent } from './screen-layout/screen-layout.component';
import { ThemeModule } from 'theme/theme.module';
import { SidebarComponent } from 'app/components/sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    RouterModule,
  ],
  declarations: [
    CommonLayoutComponent,
    ScreenLayoutComponent,
    SidebarComponent,
  ],
  exports: [
    CommonLayoutComponent,
    ScreenLayoutComponent,
  ],
})
export class LayoutsModule { }
