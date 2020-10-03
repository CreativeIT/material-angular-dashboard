import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthInterceptor, AuthService, FakeBackendInterceptor } from '@services/*';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactPopupService } from './components/contact-popup/contact-popup.service';
import { ChartsModule } from './pages/charts';
import { DashboardModule } from './pages/dashboard';
import { FormsModule } from './pages/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    DashboardModule,
    FormsModule,
    ChartsModule,
    HttpClientModule,
  ],
  providers: [
    ContactPopupService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakeBackendInterceptor,
      multi: true,
    }],
  bootstrap: [AppComponent],
})
export class AppModule { }
