import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutsModule } from 'app/layouts';
import { BlankLayoutComponent } from 'app/layouts/blank-layout';
import { ForgotPasswordComponent } from './forgot-password';
import { LoginComponent } from './login';
import { SignUpComponent } from './sign-up';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: BlankLayoutComponent,
        children: [
          { path: '', redirectTo: 'login', pathMatch: 'full' },
          { path: 'login', component: LoginComponent, pathMatch: 'full' },
          { path: 'sign-up', component: SignUpComponent, pathMatch: 'full' },
          { path: 'forgot-password', component: ForgotPasswordComponent, pathMatch: 'full' },
        ],
      },
    ]),
    LayoutsModule,
  ],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
