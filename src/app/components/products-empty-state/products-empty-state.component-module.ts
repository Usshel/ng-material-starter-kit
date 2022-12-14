import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProductsEmptyStateComponent } from './products-empty-state.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, MatProgressSpinnerModule],
  declarations: [ProductsEmptyStateComponent],
  providers: [],
  exports: [ProductsEmptyStateComponent]
})
export class ProductsEmptyStateComponentModule {
}
