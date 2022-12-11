import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {ProductModel} from '../../models/product.model';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-products-master-details',
  templateUrl: './products-master-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsMasterDetailsComponent {
  readonly productsList$: Observable<ProductModel[]> = this._productService.getAll();

  private _selectedProductIdSubject: Subject<number> = new Subject<number>();
  public selectedProductId$: Observable<number> = this._selectedProductIdSubject.asObservable();

  readonly productDetails$: Observable<ProductModel> = this.selectedProductId$.pipe(
    switchMap(data => this._productService.getOne(data)));

  constructor(private _productService: ProductService) {
  }

  selectedProductDetails(id: number): void {
    this._selectedProductIdSubject.next(id);
  }
}
