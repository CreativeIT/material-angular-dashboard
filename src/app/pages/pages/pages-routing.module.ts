import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutsModule } from 'app/layouts';
import { BlankLayoutComponent } from 'app/layouts/blank-layout';
import { ErrorComponent } from './error';
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
          { path: '404', component: ErrorComponent, pathMatch: 'full' },
          { path: 'login', component: LoginComponent, pathMatch: 'full' },
          { path: 'sign-up', component: SignUpComponent, pathMatch: 'full' },
          { path: 'forgot-password', component: ForgotPasswordComponent, pathMatch: 'full' },
          { path: '**', redirectTo: '404' },
        ],
      },
    ]),
    LayoutsModule,
  ],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
