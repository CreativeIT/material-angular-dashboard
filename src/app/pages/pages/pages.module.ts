import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ThemeModule } from 'theme';

import { ErrorComponent } from './error';
import { ForgotPasswordComponent } from './forgot-password';
import { LoginComponent } from './login';
import { PagesRoutingModule } from './pages-routing.module';
import { SignUpComponent } from './sign-up';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    PagesRoutingModule,
  ],
  declarations: [
    ErrorComponent,
    LoginComponent,
    SignUpComponent,
    ForgotPasswordComponent,
  ],
})
export class PagesModule { }
