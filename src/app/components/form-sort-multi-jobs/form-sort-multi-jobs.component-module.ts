import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { FormSortMultiJobsComponent } from './form-sort-multi-jobs.component';

@NgModule({
  imports: [ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatSelectModule, MatOptionModule, CommonModule, MatInputModule, MatButtonModule, MatListModule],
  declarations: [FormSortMultiJobsComponent],
  providers: [],
  exports: [FormSortMultiJobsComponent]
})
export class FormSortMultiJobsComponentModule {
}
