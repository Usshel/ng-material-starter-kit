import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CryptoEmptyStateComponent } from './crypto-empty-state.component';

@NgModule({
  imports: [MatCardModule, MatChipsModule, CommonModule, MatProgressSpinnerModule],
  declarations: [CryptoEmptyStateComponent],
  providers: [],
  exports: [CryptoEmptyStateComponent]
})
export class CryptoEmptyStateComponentModule {
}
