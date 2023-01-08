import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountryModel } from '../models/country.model';

@Injectable({ providedIn: 'root' })
export class UniversityService {
  constructor(private _httpClient: HttpClient) {
  }

  getAllByCountry(country: string): Observable<CountryModel[]> {
    return this._httpClient.get<CountryModel[]>('http://universities.hipolabs.com/search?country='+ country);
  }
}
