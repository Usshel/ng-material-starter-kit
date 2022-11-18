import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-table',
  styleUrls: ['./product-table.component.scss'],
  templateUrl: './product-table.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductTableComponent {
  readonly productTable$: Observable<ProductModel[]> = this._productService.getAll();

  displayedColumns: string[] = ['Image', 'Title', 'Category', 'Price'];
  dataSource = this.productTable$
  constructor(private _productService: ProductService) {
  }
}
