import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {CategoriesEmptyStateComponent} from './categories-empty-state.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, MatProgressSpinnerModule],
  declarations: [CategoriesEmptyStateComponent],
  providers: [],
  exports: [CategoriesEmptyStateComponent]
})
export class CategoriesEmptyStateComponentModule {
}
