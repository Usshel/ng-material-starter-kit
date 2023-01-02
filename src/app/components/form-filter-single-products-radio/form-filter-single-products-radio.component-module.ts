import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { FormFilterSingleProductsRadioComponent } from './form-filter-single-products-radio.component';

@NgModule({
  imports: [ReactiveFormsModule, MatCardModule, MatRadioModule, CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatListModule],
  declarations: [FormFilterSingleProductsRadioComponent],
  providers: [],
  exports: [FormFilterSingleProductsRadioComponent]
})
export class FormFilterSingleProductsRadioComponentModule {
}
