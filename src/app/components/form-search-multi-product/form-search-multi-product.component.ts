import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-form-search-multi-product',
  templateUrl: './form-search-multi-product.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormSearchMultiProductComponent {
  readonly search: FormGroup = new FormGroup({ titleOrPrice: new FormControl() });

  readonly listProducts$: Observable<ProductModel[]> = combineLatest(
    this._productService.getAll(),
    this.search.valueChanges
  ).pipe(
    map(([products, search]) => 
    search.titleOrPrice ? 
    products.filter(product => product.title.toLowerCase().includes(search.titleOrPrice.toLowerCase()) || product.price == search.titleOrPrice) : []));



  constructor(private _productService: ProductService) {
  }

  onSearchSubmitted(search: FormGroup): void {
  }
}
