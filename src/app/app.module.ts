import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactPopupService } from './components/contact-popup/contact-popup.service';
import { ChartsModule } from './pages/charts';
import { DashboardModule } from './pages/dashboard';
import { FormsModule } from './pages/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    FormsModule,
    ChartsModule,
  ],
  providers: [ContactPopupService],
  bootstrap: [AppComponent],
})
export class AppModule { }
