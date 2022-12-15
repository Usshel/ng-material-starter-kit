import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CategoriesCheckboxEmptyStateComponent } from './categories-checkbox-empty-state.component';

@NgModule({
  imports: [MatCardModule, MatCheckboxModule, CommonModule, MatProgressSpinnerModule],
  declarations: [CategoriesCheckboxEmptyStateComponent],
  providers: [],
  exports: [CategoriesCheckboxEmptyStateComponent]
})
export class CategoriesCheckboxEmptyStateComponentModule {
}
