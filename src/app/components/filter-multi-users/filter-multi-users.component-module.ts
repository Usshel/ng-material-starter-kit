import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FilterMultiUsersComponent } from './filter-multi-users.component';

@NgModule({
  imports: [MatCardModule, MatGridListModule, CommonModule, MatTableModule, MatListModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatRadioModule, ReactiveFormsModule, MatInputModule, MatButtonModule],
  declarations: [FilterMultiUsersComponent],
  providers: [],
  exports: [FilterMultiUsersComponent]
})
export class FilterMultiUsersComponentModule {
}
