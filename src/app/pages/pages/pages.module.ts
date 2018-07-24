import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeModule } from 'theme';

import { PagesRoutingModule } from './pages-routing.module';
import { ErrorComponent } from './error';
import { LoginComponent } from './login';
import { SignUpComponent } from './sign-up';
import { ForgotPasswordComponent } from './forgot-password';

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
