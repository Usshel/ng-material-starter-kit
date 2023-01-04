import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject, combineLatest } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';
import { DepartmentsModel } from '../../models/departments.model';
import { RolesModel } from '../../models/roles.model';
import { UsersModel } from '../../models/users.model';
import { FilterMultiUsersService } from '../../services/filter-multi-users.service';

@Component({
  selector: 'app-filter-multi-users',
  templateUrl: './filter-multi-users.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterMultiUsersComponent {
  displayedColumns: string[] = ['id', 'email', 'department', 'role'];
  readonly roleAndDepartment: FormGroup = new FormGroup({ formRole: new FormControl(), formDepartment: new FormControl() });

  readonly departments$: Observable<DepartmentsModel[]> = this._filterMultiUsersService.getAllDepartments();
  readonly roles$: Observable<RolesModel[]> = this._filterMultiUsersService.getAllRoles();


  readonly listUsers$: Observable<UsersModel[]> = combineLatest([
    this._filterMultiUsersService.getAllUsers(),
    this.roleAndDepartment.valueChanges.pipe(
      startWith('')
    )
  ]).pipe(
    map(([user, idDepartment]) => user.filter(
      user => ((user.departmentId == idDepartment.formDepartment) && (user.roleId == idDepartment.formRole))
    ))
  );



  dataSource = this.listUsers$ || this.departments$;
  private _nameDepartmentSubject: Subject<string> = new Subject<string>();
  public nameDepartment$: Observable<string> = this._nameDepartmentSubject.asObservable();
  private _nameRoleSubject: Subject<string> = new Subject<string>();
  public nameRole$: Observable<string> = this._nameRoleSubject.asObservable();

  constructor(private _filterMultiUsersService: FilterMultiUsersService) {
  }

  onDepartmentSubmitted(nameDepartment: string): void {
    this._nameDepartmentSubject.next(nameDepartment)
  }

  onRoleSubmitted(nameRole: string): void {
    this._nameRoleSubject.next(nameRole)
  }

}
