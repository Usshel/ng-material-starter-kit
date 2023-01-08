import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { FormSearchSingleUniversityBackendComponent } from './form-search-single-university-backend.component';

@NgModule({
  imports: [MatCardModule, MatInputModule, CommonModule, MatFormFieldModule, ReactiveFormsModule, MatListModule],
  declarations: [FormSearchSingleUniversityBackendComponent],
  providers: [],
  exports: [FormSearchSingleUniversityBackendComponent]
})
export class FormSearchSingleUniversityBackendComponentModule {
}
