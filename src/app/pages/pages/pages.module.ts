import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ThemeModule } from 'theme';

import { ErrorComponent } from './error';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    PagesRoutingModule,
  ],
  declarations: [
    ErrorComponent,
  ],
})
export class PagesModule { }
