import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule as NgFormsModule } from '@angular/forms';
import { NgGetmdlSelectModule } from 'ng-getmdl-select';

import { ThemeModule } from 'theme';

import { EmployerFormComponent } from './employer-form';
import { FormsComponent } from './forms.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    NgFormsModule,
    NgGetmdlSelectModule,
  ],
  declarations: [
    FormsComponent,
    EmployerFormComponent,
  ],
  providers: [],
})
export class FormsModule { }
