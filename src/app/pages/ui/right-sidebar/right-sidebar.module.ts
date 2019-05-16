import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterialAngularSelectModule } from 'material-angular-select';
import { ThemeModule } from 'theme';

import { FiltersComponent } from './filters/filters.component';
import { RightSidebarComponent } from './right-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    FormsModule,
    MaterialAngularSelectModule,
  ],
  declarations: [
    RightSidebarComponent,
    FiltersComponent,
  ],
})
export class RightSidebarModule {}
