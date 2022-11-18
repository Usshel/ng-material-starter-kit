import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CategoriesCheckboxlistComponent } from './categories-checkboxlist.component';

@NgModule({
  imports: [MatCardModule, MatCheckboxModule, CommonModule],
  declarations: [CategoriesCheckboxlistComponent],
  providers: [],
  exports: [CategoriesCheckboxlistComponent]
})
export class CategoriesCheckboxlistComponentModule {
}
