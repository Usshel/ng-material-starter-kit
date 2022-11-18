import { NgModule } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { CategoriesSelectionComponent } from './categories-selection.component';
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [MatButtonToggleModule, MatMenuModule, AsyncPipe, MatCardModule, AsyncPipe, MatButtonModule, NgForOf],
  declarations: [CategoriesSelectionComponent],
  providers: [],
  exports: [CategoriesSelectionComponent]
})
export class CategoriesSelectionComponentModule {
}
