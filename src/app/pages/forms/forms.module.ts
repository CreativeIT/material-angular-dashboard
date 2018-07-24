import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as NgFormsModule } from '@angular/forms';

import { ThemeModule } from 'theme';

import { FormsComponent } from './forms.component';
import { EmployerFormComponent } from './employer-form';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    NgFormsModule,
  ],
  declarations: [
    FormsComponent,
    EmployerFormComponent,
  ],
  providers: [],
})
export class FormsModule { }
