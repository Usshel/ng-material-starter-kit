import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';

@Injectable()
export class ProductService {
  constructor(private _httpClient: HttpClient) {
  }
            //Observable to strumień, który emituje wartości (pojedyńcze lub wiele) dowolnego typu do którego możesz się podłączyć oraz od niego odłączyć
            //porównanie: rzeka w której płyną[emituje] różne[dowolnego typu] przedmioty[wartości]
  getAll(): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>('https://fakestoreapi.com/products');
  }
}