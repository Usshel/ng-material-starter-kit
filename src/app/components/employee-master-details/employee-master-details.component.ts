import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {EmployeeModel} from '../../models/employee.model';
import {EmployeeService} from '../../services/employee.service';
import {GetModel} from "../../models/get.model";

@Component({
  selector: 'app-employee-master-details',
  templateUrl: './employee-master-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeMasterDetailsComponent {
  readonly employees$: Observable<EmployeeModel[]> = this._employeeService.getAll();

  private _selectedEmployeeSubject: Subject<number> = new Subject<number>();
  public selectedEmployee$: Observable<number> = this._selectedEmployeeSubject.asObservable();

  readonly employeeDetails$: Observable<GetModel> = this.selectedEmployee$.pipe(
    switchMap(data => this._employeeService.getOne(data)));

  constructor(private _employeeService: EmployeeService) {
  }

  selectedEmployee(id: number): void {
    this._selectedEmployeeSubject.next(id);
  }
}
