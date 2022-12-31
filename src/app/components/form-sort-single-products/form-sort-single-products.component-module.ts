import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormSortSingleProductsComponent } from './form-sort-single-products.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [ReactiveFormsModule, MatCardModule, MatListModule, CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule],
  declarations: [FormSortSingleProductsComponent],
  providers: [],
  exports: [FormSortSingleProductsComponent]
})
export class FormSortSingleProductsComponentModule {
}
