import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { HolidaysListComponent } from './holidays-list.component';
import {MatSelectModule} from "@angular/material/select";

@NgModule({
    imports: [MatCardModule, MatListModule, CommonModule, MatSelectModule],
  declarations: [HolidaysListComponent],
  providers: [],
  exports: [HolidaysListComponent]
})
export class HolidaysListComponentModule {
}
