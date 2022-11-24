import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductDetailsModel} from '../models/product-details.model';

@Injectable()
export class ProductDetailsService {
  constructor(private _httpClient: HttpClient) {
  }

  getOne(id: string): Observable<ProductDetailsModel> {
    return this._httpClient.get<ProductDetailsModel>('https://fakestoreapi.com/products/' + id);
  }
}
