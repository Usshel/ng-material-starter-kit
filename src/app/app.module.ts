import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {ProductServiceModule} from "./services/product.service-module";
import {ProductListComponentModule} from "./components/product-list/product-list.component-module";
import {CategoryListComponentModule} from "./components/category-list/category-list.component-module";
import {CategoriesServiceModule} from "./services/categories.service-module";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ProductServiceModule,
    ProductListComponentModule,
    CategoryListComponentModule,
    CategoriesServiceModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
