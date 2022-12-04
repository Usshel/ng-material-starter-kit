import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductModel} from '../models/product.model';

@Injectable()
export class ProductService {
  constructor(private _httpClient: HttpClient) {
  }

  //Omit typ który bierze Wszystkie props i tworzy nowy typ usuwając z niego dany key(props)
  //Observable to strumień, który emituje wartości (pojedyńcze lub wiele) dowolnego typu do którego możesz się podłączyć oraz od niego odłączyć
  //porównanie: rzeka w której płyną[emituje] różne[dowolnego typu] przedmioty[wartości]
  delete(id: number): Observable<ProductModel> {
    return this._httpClient.delete<ProductModel>('https://fakestoreapi.com/products/' + id,);
  }

  create(product: Omit<ProductModel, 'id'>): Observable<ProductModel> {
    return this._httpClient.post<ProductModel>('https://fakestoreapi.com/products', product);
  }

  getOne(id: string): Observable<ProductModel> {
    return this._httpClient.get<ProductModel>('https://fakestoreapi.com/products/' + id);
  }

  getAll(): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>('https://fakestoreapi.com/products');
  }


}
