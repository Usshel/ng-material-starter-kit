import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { EmployeesSortingFilteringComponent } from './employees-sorting-filtering.component';

@NgModule({
  imports: [MatCardModule, CommonModule, MatListModule],
  declarations: [EmployeesSortingFilteringComponent],
  providers: [],
  exports: [EmployeesSortingFilteringComponent]
})
export class EmployeesSortingFilteringComponentModule {
}
