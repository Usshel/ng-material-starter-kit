import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { HolidaysListComponent } from './components/holidays-list/holidays-list.component';
import { CategoriesCheckboxlistComponent } from './components/categories-checkboxlist/categories-checkboxlist.component';
import { CategoriesSelectionComponent } from './components/categories-selection/categories-selection.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CatComponent } from './components/cat/cat.component';
import { AgeComponent } from './components/age/age.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { BoredActivitiesComponent } from './components/bored-activities/bored-activities.component';
import { FilteredProductListComponent } from './components/filtered-product-list/filtered-product-list.component';
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
import { ProductFormComponentModule } from './components/product-form/product-form.component-module';
import { EmployeeFormComponentModule } from './components/employee-form/employee-form.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { LoginFormComponentModule } from './components/login-form/login-form.component-module';
import { LoginServiceModule } from './services/login.service-module';
import { RegisterFormComponentModule } from './components/register-form/register-form.component-module';
import { RegisterServiceModule } from './services/register.service-module';
import { ProductDetailsComponentModule } from './components/product-details/product-details.component-module';
import { ProductDetailsServiceModule } from './services/product-details.service-module';
import { CatComponentModule } from './components/cat/cat.component-module';
import { CatServiceModule } from './services/cat.service-module';
import { AgeComponentModule } from './components/age/age.component-module';
import { AgeServiceModule } from './services/age.service-module';
import { CartDetailsComponentModule } from './components/cart-details/cart-details.component-module';
import { CartDetailsServiceModule } from './services/cart-details.service-module';
import { UserDetailsComponentModule } from './components/user-details/user-details.component-module';
import { UserServiceModule } from './services/user.service-module';
import { BoredActivitiesComponentModule } from './components/bored-activities/bored-activities.component-module';
import { BoredServiceModule } from './services/bored.service-module';
import { FilteredProductListComponentModule } from './components/filtered-product-list/filtered-product-list.component-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'products', component: ProductListComponent },
    { path: 'categories', component: CategoryListComponent },
    { path: 'crypto', component: CryptoListComponent },
    { path: 'public-holidays', component: HolidaysListComponent },
    { path: 'checkbox-categories', component: CategoriesCheckboxlistComponent },
    { path: 'categories-menu', component: CategoriesSelectionComponent },
    { path: 'product-search', component: ProductTableComponent },
    { path: 'create-product', component: ProductFormComponent },
    { path: 'create-employee', component: EmployeeFormComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'register', component: RegisterFormComponent },
    { path: 'product/:id', component: ProductDetailsComponent },
    { path: 'cat-fact', component: CatComponent },
    { path: 'age/:name', component: AgeComponent },
    { path: 'cart/:id', component: CartDetailsComponent },
    { path: 'user/:id', component: CartDetailsComponent },
    { path: 'users/:id', component: UserDetailsComponent },
    { path: 'activity/:participants', component: BoredActivitiesComponent },
    { path: 'products/:category', component: FilteredProductListComponent }
  ]), ProductListComponentModule, ProductServiceModule, CategoryListComponentModule, CategoriesServiceModule, CryptoListComponentModule, CryptoServiceModule, HolidaysListComponentModule, HolidaysServiceModule, CategoriesCheckboxlistComponentModule, CategoriesSelectionComponentModule, ProductTableComponentModule, ProductFormComponentModule, EmployeeFormComponentModule, EmployeeServiceModule, LoginFormComponentModule, LoginServiceModule, RegisterFormComponentModule, RegisterServiceModule, ProductDetailsComponentModule, ProductDetailsServiceModule, CatComponentModule, CatServiceModule, AgeComponentModule, AgeServiceModule, CartDetailsComponentModule, CartDetailsServiceModule, UserDetailsComponentModule, UserServiceModule, BoredActivitiesComponentModule, BoredServiceModule, FilteredProductListComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
