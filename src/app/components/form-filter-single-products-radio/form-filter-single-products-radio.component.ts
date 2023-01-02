import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-form-filter-single-products-radio',
  templateUrl: './form-filter-single-products-radio.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormFilterSingleProductsRadioComponent {

  readonly categories: FormGroup = new FormGroup({ formCategory: new FormControl('') });
  readonly listCategories$: Observable<string[]> = this._categoriesService.getAllString();

  
  readonly categoryForm$: Observable<string> = this.categories.valueChanges.pipe(
    map(form => form.formCategory)
  )

  readonly listProducts$: Observable<ProductModel[]> = combineLatest([
    this._productService.getAll(),
    this.categoryForm$
  ]).pipe(
    map(([product, formCategory]) => product.filter(
      product => product.category.includes(formCategory)
    ))
  );
  readonly listCategoryAll$: Observable<string[]> = this._categoriesService.getAll();

  constructor(private _productService: ProductService, private _categoriesService: CategoriesService) {
  }

  onCategoriesSubmitted(categories: FormGroup): void {
  }
}
