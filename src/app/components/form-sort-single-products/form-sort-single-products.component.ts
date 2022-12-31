import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { combineLatest, map, Observable, of, startWith } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-form-sort-single-products',
  templateUrl: './form-sort-single-products.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormSortSingleProductsComponent {

  readonly sortingValues$ : Observable<string[]> = of(['asc', 'dsc']);
  readonly sort: FormGroup = new FormGroup({ sorting: new FormControl() });

  readonly ListProducts$: Observable<ProductModel[]> = combineLatest([
    this._productService.getAll(),
    this.sort.valueChanges.pipe(
      startWith('')
    )
  ]).pipe(
    map(([products, sort]) => {
    return products.sort((productA, productB) => {
      if(productA.price > productB.price) return sort.sorting == 'asc' ? 1 : -1;
      if(productA.price < productB.price) return sort.sorting == 'dsc' ? 1 : -1;
      return 0
    })
  
  }
  ));
  constructor(private _productService: ProductService) {
  }
}
