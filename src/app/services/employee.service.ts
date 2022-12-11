import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {EmployeeModel} from '../models/employee.model';

import {EmployeeResponse} from './employee.response';
import {GetModel} from "../models/get.model";

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }


  getAll(): Observable<EmployeeModel[]> {
    return this._httpClient
      .get<EmployeeResponse>(
        'https://dummy.restapiexample.com/api/v1/employees'
      )
      .pipe(map((response) => response.data));
  }

  delete(id: number): Observable<EmployeeModel> {
    return this._httpClient.delete<EmployeeModel>('https://dummy.restapiexample.com/api/v1/delete/' + id);
  }

  getOne(id: number): Observable<GetModel> {
    return this._httpClient.get<GetModel>('https://dummy.restapiexample.com/api/v1/employee/' + id);
  }
}
