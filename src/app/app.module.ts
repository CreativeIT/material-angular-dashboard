import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MapsModule } from './pages/maps/maps.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { ChartsModule } from './pages/charts/charts.module';
import { FormsModule } from './pages/forms/forms.module';
import { LayoutsModule } from './layouts/layouts.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    DashboardModule,
    FormsModule,
    MapsModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
