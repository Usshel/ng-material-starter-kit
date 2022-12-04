import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {ProductModel} from '../../models/product.model';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-products-advanced-delete',
  templateUrl: './products-advanced-delete.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsAdvancedDeleteComponent {
  readonly products$: Observable<ProductModel[]> = this._productService.getAll();
  private _refreshSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  public refresh$: Observable<void> = this._refreshSubject.asObservable();
  readonly refreshedList$: Observable<ProductModel[]> = this.refresh$.pipe(
    switchMap(data => this._productService.getAll()));

  constructor(private _productService: ProductService) {
  }

  delete(id: number): void {
    this._productService.delete(id).subscribe(() => this._refreshSubject.next());
  }
}
