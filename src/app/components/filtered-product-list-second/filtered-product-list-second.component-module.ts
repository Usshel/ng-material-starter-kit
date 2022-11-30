import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { FilteredProductListSecondComponent } from './filtered-product-list-second.component';

@NgModule({
  imports: [MatCardModule, MatListModule, FlexModule, CommonModule],
  declarations: [FilteredProductListSecondComponent],
  providers: [],
  exports: [FilteredProductListSecondComponent]
})
export class FilteredProductListSecondComponentModule {
}
