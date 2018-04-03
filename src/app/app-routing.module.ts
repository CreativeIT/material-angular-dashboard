import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapsComponent } from './maps/maps.component';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  imports: [RouterModule.forRoot(
    [
      { path: '', redirectTo: 'app', pathMatch: 'full' },
      { path: 'app', component: LayoutComponent, children: [
        { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
        { path: 'forms', component: FormsComponent, pathMatch: 'full' },
        { path: 'maps', component: MapsComponent, pathMatch: 'full' },
        { path: '**', redirectTo: '/pages/404' },
      ] },
      { path: 'ui', loadChildren: './ui/ui.module#UIModule' },
      { path: 'pages', loadChildren: './pages/pages.module#PagesModule' },
      { path: '**', redirectTo: 'pages/404' },
    ],
    { useHash: true },
  )],
  exports: [RouterModule],
})
export class AppRoutingModule { }
