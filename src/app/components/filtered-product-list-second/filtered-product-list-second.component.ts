import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, Subject, combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { CategoriesService } from '../../services/categories.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-filtered-product-list-second',
  templateUrl: './filtered-product-list-second.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilteredProductListSecondComponent {
  readonly categories$: Observable<string[]> = this._categoriesService.getAll();
  private _categorySubject: Subject<string> = new Subject<string>();
  public category$: Observable<string> = this._categorySubject.asObservable();
  readonly products$: Observable<ProductModel[]> = combineLatest([
    this._productService.getAll(),
    this.category$
  ]).pipe(
    map(([products, category]: [ProductModel[], string]) => {
      return products.filter(product => product.category === category);
    })
  );

  constructor(private _categoriesService: CategoriesService, private _productService: ProductService) {
  }

  selectCategory(category: string): void {
    this._categorySubject.next(category);
  }
}
