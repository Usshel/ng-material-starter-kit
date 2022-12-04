import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {BeersWithPaginationComponent} from './beers-with-pagination.component';
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  imports: [MatCardModule, MatPaginatorModule],
  declarations: [BeersWithPaginationComponent],
  providers: [],
  exports: [BeersWithPaginationComponent]
})
export class BeersWithPaginationComponentModule {
}
