import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MapsModule } from './maps/maps.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { FormsModule } from './forms/forms.module';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    DashboardModule,
    FormsModule,
    MapsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
