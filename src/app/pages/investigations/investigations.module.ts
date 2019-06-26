import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ThemeModule } from 'theme';

import { FormWrapperComponent } from '../../components/form-wrapper';
import { InvestigWrapTableComponent } from '../../components/investig-wrap-table/';
import { PaginationComponent } from '../../components/pagination';
import { InvestigationDetailComponent } from './investigation-detail';
import { InvestigationsComponent } from './investigations.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    RouterModule,
    FormsModule,
  ],
  declarations: [
    InvestigWrapTableComponent,
    InvestigationsComponent,
    InvestigationDetailComponent,
    PaginationComponent,
    FormWrapperComponent,
  ],
  providers: [],
})
export class InvestigationsModule {
}
