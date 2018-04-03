import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { PagesComponent } from './pages.component';
import { ErrorComponent } from '../error/error.component';
import { LoginComponent } from '../login/login.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: PagesComponent,
      children: [
        { path: '404', component: ErrorComponent, pathMatch: 'full' },
        { path: 'login', component: LoginComponent, pathMatch: 'full' },
        { path: '**', redirectTo: '404' },
      ],
    },
  ])],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
