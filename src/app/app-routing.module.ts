import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormWrapperComponent } from './components/form-wrapper';
import { LayoutsModule } from './layouts';
import { CommonLayoutComponent } from './layouts/common-layout';
import { DashboardComponent } from './pages/dashboard';
import { InvestigationDetailComponent, InvestigationsComponent } from './pages/investigations';
import { AuthGuard } from './services/auth';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: '', redirectTo: 'app/dashboard', pathMatch: 'full' },
        {
          path: 'app', canActivate: [AuthGuard], component: CommonLayoutComponent, children: [
            { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
            { path: 'investigations', component: InvestigationsComponent, pathMatch: 'full' },
            {
              path: 'investigation',
              component: FormWrapperComponent,
              children: [
                { path: ':id', component: InvestigationDetailComponent },
              ],
            },
          ],
        },
        { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) },
        { path: 'pages', loadChildren: () => import('./pages/pages/pages.module').then(m => m.PagesModule) },
        { path: '**', redirectTo: '/pages/404' },
      ],
      { useHash: true },
    ),
    LayoutsModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
