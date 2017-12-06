import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', loadChildren: './layout/layout.module#LayoutModule' },
    { path: 'pages', loadChildren: './pages/pages.module#PagesModule' },
    { path: '**', redirectTo: 'pages/404' },
  ], { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
