import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ThemeModule } from 'theme';

import { AuthRoutingModule } from './auth-routing.module';
import { ForgotPasswordComponent } from './forgot-password';
import { LoginComponent } from './login';
import { SignUpComponent } from './sign-up';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    AuthRoutingModule,
  ],
  declarations: [
    LoginComponent,
    SignUpComponent,
    ForgotPasswordComponent,
  ],
})
export class AuthModule { }
