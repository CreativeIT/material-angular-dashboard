import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ThemeModule } from 'theme';

import { TooltipModule } from '../../../theme/directives/tooltip/tooltip.module';
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
    FormsModule,
    ReactiveFormsModule,
    TooltipModule,
  ],
  declarations: [
    ErrorComponent,
    LoginComponent,
    SignUpComponent,
    ForgotPasswordComponent,
  ],
})
export class PagesModule { }
