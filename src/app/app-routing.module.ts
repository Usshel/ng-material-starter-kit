import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { HolidaysListComponent } from './components/holidays-list/holidays-list.component';
import { CategoriesCheckboxlistComponent } from './components/categories-checkboxlist/categories-checkboxlist.component';
import { CategoriesSelectionComponent } from './components/categories-selection/categories-selection.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { CategoryListComponentModule } from './components/category-list/category-list.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { CryptoListComponentModule } from './components/crypto-list/crypto-list.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';
import { HolidaysListComponentModule } from './components/holidays-list/holidays-list.component-module';
import { HolidaysServiceModule } from './services/holidays.service-module';
import { CategoriesCheckboxlistComponentModule } from './components/categories-checkboxlist/categories-checkboxlist.component-module';
import { CategoriesSelectionComponentModule } from './components/categories-selection/categories-selection.component-module';
import { ProductTableComponentModule } from './components/product-table/product-table.component-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'products', component: ProductListComponent },
    { path: 'categories', component: CategoryListComponent },
    { path: 'crypto', component: CryptoListComponent },
    { path: 'public-holidays', component: HolidaysListComponent },
    { path: 'checkbox-categories', component: CategoriesCheckboxlistComponent },
    { path: 'categories-menu', component: CategoriesSelectionComponent },
    { path: 'product-search', component: ProductTableComponent }
  ]), ProductListComponentModule, ProductServiceModule, CategoryListComponentModule, CategoriesServiceModule, CryptoListComponentModule, CryptoServiceModule, HolidaysListComponentModule, HolidaysServiceModule, CategoriesCheckboxlistComponentModule, CategoriesSelectionComponentModule, ProductTableComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
