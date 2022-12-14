import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {delay, Observable} from 'rxjs';
import {ProductModel} from '../../models/product.model';
import {ProductService} from '../../services/product.service';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-products-empty-state',
  templateUrl: './products-empty-state.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsEmptyStateComponent {
  readonly productsList$: Observable<ProductModel[]> = this._productService.getAll().pipe(
    delay(2000),

    map(() => [])
  );

  constructor(private _productService: ProductService) {
  }
}
