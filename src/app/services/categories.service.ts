import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoriesModel } from '../models/categories.model';

@Injectable()
export class CategoriesService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<string[]> {
    return this._httpClient.get<string[]>('https://fakestoreapi.com/products/categories');
  }

  getAllString(): Observable<string[]> {
    return this._httpClient.get<string[]>('https://fakestoreapi.com/products/categories');
  }
}
