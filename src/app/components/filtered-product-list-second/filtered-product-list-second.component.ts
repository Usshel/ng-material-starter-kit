import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {BehaviorSubject, Observable, Subject, combineLatest, of, switchMap} from 'rxjs';
import { map } from 'rxjs/operators';
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
  private _orderSubject: BehaviorSubject<string> = new BehaviorSubject<string>('asc');

  public category$: Observable<string> = this._categorySubject.asObservable();
  public order$: Observable<string> = this._orderSubject.asObservable();


  readonly products$: Observable<ProductModel[]> = combineLatest([
    this.category$,
    this.order$
  ]).pipe(
    switchMap(([category, order]: [string, string]) => this._productService.getAll().pipe(

      map((products) => products.filter((product) => product.category === category)),

      map((products) => {
        return products.sort((a, b) => {
          if (a.price > b.price) return order === 'asc' ? 1 : -1;
          if (a.price < b.price) return order === 'asc' ? -1 : 1;
          return 0;
        })
      }))
    )
  );


  public orders: Observable<string[]> = of(['asc','desc'])

  constructor(private _categoriesService: CategoriesService, private _productService: ProductService) {
  }

  selectCategory(category: string): void {
    this._categorySubject.next(category);
  }

  sort(order: string): void {
    this._orderSubject.next(order);
  }
}
