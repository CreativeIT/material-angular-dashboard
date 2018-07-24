import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { CommonLayoutComponent } from './layouts/common-layout';
import { DashboardComponent } from './pages/dashboard';
import { MapsComponent } from './pages/maps';
import { ChartsComponent } from './pages/charts';
import { FormsComponent } from './pages/forms';
import { LayoutsModule } from './layouts';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: '', redirectTo: 'app/dashboard', pathMatch: 'full' },
        { path: 'app', component: CommonLayoutComponent, children: [
          { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
          { path: 'forms', component: FormsComponent, pathMatch: 'full' },
          { path: 'maps', component: MapsComponent, pathMatch: 'full' },
          { path: 'charts', component: ChartsComponent, pathMatch: 'full' },
          { path: '**', redirectTo: '/pages/404' },
        ] },
        { path: 'ui', loadChildren: './pages/ui/ui.module#UIModule' },
        { path: 'pages', loadChildren: './pages/pages/pages.module#PagesModule' },
        { path: '**', redirectTo: '/pages/404' },
      ],
      { useHash: true },
    ),
    LayoutsModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
