import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { ThemeModule } from 'theme/theme.module';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    RouterModule,
  ],
  declarations: [
    LayoutComponent,
  ],
  exports: [
    LayoutComponent,
  ]
})
export class LayoutModule { }
