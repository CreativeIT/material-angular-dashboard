import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { LayoutComponent } from './layout.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FormsComponent } from '../forms/forms.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: LayoutComponent,
      children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
        { path: 'forms', component: FormsComponent, pathMatch: 'full' },
        { path: '**', redirectTo: '/pages/404' },
      ],
    },
  ])],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
