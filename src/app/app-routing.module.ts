import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutsModule } from './layouts';
import { CommonLayoutComponent } from './layouts/common-layout';
import { ChartsComponent } from './pages/charts';
import { DashboardComponent } from './pages/dashboard';
import { FormsComponent } from './pages/forms';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: '', redirectTo: 'app/dashboard', pathMatch: 'full' },
        { path: 'app', component: CommonLayoutComponent, children: [
          { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
          { path: 'forms', component: FormsComponent, pathMatch: 'full' },
          { path: 'charts', component: ChartsComponent, pathMatch: 'full' },
          { path: '**', redirectTo: '/pages/404' },
        ] },
        { path: 'ui', loadChildren: './pages/ui/ui.module#UIModule' },
        { path: 'maps', loadChildren: './pages/maps/maps.module#MapsModule' },
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
