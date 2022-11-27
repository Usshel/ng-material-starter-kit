import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { BoredActivitiesComponent } from './bored-activities.component';

@NgModule({
  imports: [CommonModule, MatCardModule],
  declarations: [BoredActivitiesComponent],
  providers: [],
  exports: [BoredActivitiesComponent]
})
export class BoredActivitiesComponentModule {
}
