import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MapsComponent } from './pages/maps/maps.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { FormsComponent } from './pages/forms/forms.component';

@NgModule({
  imports: [RouterModule.forRoot(
    [
      { path: '', redirectTo: 'app', pathMatch: 'full' },
      { path: 'app', component: CommonLayoutComponent, children: [
        { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
        { path: 'forms', component: FormsComponent, pathMatch: 'full' },
        { path: 'maps', component: MapsComponent, pathMatch: 'full' },
        { path: 'charts', component: ChartsComponent, pathMatch: 'full' },
        { path: '**', redirectTo: '/pages/404' },
      ] },
      { path: 'ui', loadChildren: './pages/ui/ui.module#UIModule' },
      { path: 'pages', loadChildren: './pages/pages/pages.module#PagesModule' },
      { path: '**', redirectTo: 'pages/404' },
    ],
    { useHash: true },
  )],
  exports: [RouterModule],
})
export class AppRoutingModule { }
