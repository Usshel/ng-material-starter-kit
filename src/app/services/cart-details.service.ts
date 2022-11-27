import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartDetailsModel } from '../models/cart-details.model';

@Injectable()
export class CartDetailsService {
  constructor(private _httpClient: HttpClient) {
  }

  getOne(id: string): Observable<CartDetailsModel> {
    return this._httpClient.get<CartDetailsModel>('https://fakestoreapi.com/carts/'+ id);
  }
}
