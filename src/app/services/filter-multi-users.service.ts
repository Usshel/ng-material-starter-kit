import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DepartmentsModel } from '../models/departments.model';
import { RolesModel } from '../models/roles.model';
import { UsersModel } from '../models/users.model';

@Injectable({ providedIn: 'root' })
export class FilterMultiUsersService {
  constructor(private _httpClient: HttpClient) {
  }

  getAllDepartments(): Observable<DepartmentsModel[]> {
    return this._httpClient.get<DepartmentsModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/departments');
  }

  getAllRoles(): Observable<RolesModel[]> {
    return this._httpClient.get<RolesModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/roles');
  }

  getAllUsers(): Observable<UsersModel[]> {
    return this._httpClient.get<UsersModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/user');
  }
}
