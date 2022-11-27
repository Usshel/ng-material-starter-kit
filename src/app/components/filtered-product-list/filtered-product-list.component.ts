import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {combineLatest, map, Observable} from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { CategoriesService } from '../../services/categories.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-filtered-product-list',
  templateUrl: './filtered-product-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilteredProductListComponent {
  readonly categories$: Observable<string[]> = this._categoriesService.getAllString();
  readonly products$: Observable<ProductModel[]> = combineLatest([
    this._productService.getAll(),
    this._activatedRoute.params
  ]).pipe(map( ([products, params]:[ProductModel[], Params]) =>{
    return products.filter((product:ProductModel)=> product.category===params['category']);
    }));

  constructor(private _categoriesService: CategoriesService, private _productService: ProductService, private _activatedRoute: ActivatedRoute) {
  }
}
