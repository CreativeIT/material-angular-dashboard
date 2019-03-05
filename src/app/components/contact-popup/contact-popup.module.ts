import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ThemeModule } from 'theme';
import { ContactPopupComponent } from './contact-popup.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    FormsModule,
    HttpClientModule,
  ],
  declarations: [
    ContactPopupComponent,
  ],
  exports: [
    ContactPopupComponent,
  ],
  providers: [],
})
export class ContactPopupModule {}
