import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarsModel } from '../models/cars.model';
import { CarBrandsModel } from '../models/car-brands.model';
import { CarSecurityFeaturesModel } from '../models/car-security-features.model';
import { CarComfortFeaturesModel } from '../models/car-comfort-features.model';

@Injectable({ providedIn: 'root' })
export class FormAutocompleteMultiCarsService {
  constructor(private _httpClient: HttpClient) {
  }

  getAllCars(): Observable<CarsModel[]> {
    return this._httpClient.get<CarsModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/cars');
  }
  getAllBrands(): Observable<CarBrandsModel[]> {
    return this._httpClient.get<CarBrandsModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/car-brands')
  }

  getAllSF(): Observable<CarSecurityFeaturesModel[]> {
    return this._httpClient.get<CarSecurityFeaturesModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/car-security-features');
  }

  getAllCF(): Observable<CarComfortFeaturesModel[]> {
    return this._httpClient.get<CarComfortFeaturesModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/car-comfort-features');
  }
}
