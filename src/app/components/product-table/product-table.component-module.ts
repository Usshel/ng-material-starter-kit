import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ProductTableComponent } from './product-table.component';
import {MatTableModule} from "@angular/material/table";
import {AsyncPipe, NgForOf} from "@angular/common";

@NgModule({
  imports: [MatCardModule, MatTableModule, AsyncPipe, NgForOf],
  declarations: [ProductTableComponent],
  providers: [],
  exports: [ProductTableComponent]
})
export class ProductTableComponentModule {
}
