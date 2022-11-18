import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {EmployeeService} from '../../services/employee.service';

@Component({
  selector: 'app-employee-form',
  styleUrls: ['./employee-form.component.scss'],
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent {
  readonly employeeform: FormGroup = new FormGroup({
    name: new FormControl(),
    salary: new FormControl(),
    age: new FormControl()
  });

  constructor(private _employeeService: EmployeeService) {
  }

  onEmployeeformSubmitted(employeeform: FormGroup): void {
    this._employeeService.create({
      name: employeeform.get('name')?.value,
      age: employeeform.get('age')?.value,
      salary: employeeform.get('salary')?.value,
    }).subscribe();
  }
}
