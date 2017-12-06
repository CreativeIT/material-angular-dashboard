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
        { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
        { path: 'dashboard', component: DashboardComponent },
        { path: 'forms', component: FormsComponent },
      ],
    },
  ])],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
