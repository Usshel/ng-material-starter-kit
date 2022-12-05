import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {EmployeeModel} from '../../models/employee.model';
import {EmployeeService} from '../../services/employee.service';

@Component({
  selector: 'app-employees-advanced-delete',
  templateUrl: './employees-advanced-delete.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesAdvancedDeleteComponent {


  private _refreshedEmployeeListSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  public refreshedEmployeeList$: Observable<void> = this._refreshedEmployeeListSubject.asObservable();

  readonly refreshList$: Observable<EmployeeModel[]> = this.refreshedEmployeeList$.pipe(
    switchMap(list => this._employeeService.getAll()
    ));

  constructor(private _employeeService: EmployeeService) {
  }

  delete(Id: number): void {
    this._employeeService.delete(Id).subscribe(() => this._refreshedEmployeeListSubject.next());

  }
}
