import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ErrorComponent } from '../error/error.component';
import { LoginComponent } from '../login/login.component';
import { ThemeModule } from 'theme/theme.module';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    PagesRoutingModule,
  ],
  declarations: [
    PagesComponent,
    ErrorComponent,
    LoginComponent,
  ]
})
export class PagesModule {}
