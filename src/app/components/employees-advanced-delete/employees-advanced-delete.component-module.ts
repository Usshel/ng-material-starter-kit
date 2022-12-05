import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {EmployeesAdvancedDeleteComponent} from './employees-advanced-delete.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, MatButtonModule],
  declarations: [EmployeesAdvancedDeleteComponent],
  providers: [],
  exports: [EmployeesAdvancedDeleteComponent]
})
export class EmployeesAdvancedDeleteComponentModule {
}
