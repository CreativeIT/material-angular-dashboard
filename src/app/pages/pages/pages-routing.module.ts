import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ScreenLayoutComponent } from 'app/layouts/screen-layout/screen-layout.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: ScreenLayoutComponent,
      children: [
        { path: '404', component: ErrorComponent, pathMatch: 'full' },
        { path: 'login', component: LoginComponent, pathMatch: 'full' },
        { path: 'sign-up', component: SignUpComponent, pathMatch: 'full' },
        { path: 'forgot-password', component: ForgotPasswordComponent, pathMatch: 'full' },
        { path: '**', redirectTo: '404' },
      ],
    },
  ])],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
