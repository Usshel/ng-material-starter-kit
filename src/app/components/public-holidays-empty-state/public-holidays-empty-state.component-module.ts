import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { PublicHolidaysEmptyStateComponent } from './public-holidays-empty-state.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, MatProgressSpinnerModule, MatFormFieldModule, MatSelectModule, MatOptionModule],
  declarations: [PublicHolidaysEmptyStateComponent],
  providers: [],
  exports: [PublicHolidaysEmptyStateComponent]
})
export class PublicHolidaysEmptyStateComponentModule {
}
