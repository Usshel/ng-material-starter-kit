import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {BehaviorSubject, combineLatest, Observable, of, ReplaySubject, switchMap, take} from 'rxjs';
import {EmployeeModel} from '../../models/employee.model';
import {EmployeeService} from '../../services/employee.service';
import {map} from "rxjs/operators";

interface Age {
  minAge: number;
  maxAge: number;
}

@Component({
  selector: 'app-employees-sorting-filtering',
  templateUrl: './employees-sorting-filtering.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesSortingFilteringComponent {


  public age: Observable<Age[]> = of([
    {minAge: 0, maxAge: 100},
    {minAge: 0, maxAge: 20},
    {minAge: 21, maxAge: 30},
    {minAge: 31, maxAge: 40},
    {minAge: 41, maxAge: 50},
    {minAge: 51, maxAge: 100}
  ]);

  private _filterAgeSubject: ReplaySubject<Age> = new ReplaySubject<Age>(0, 100);


  private _orderPriceSubject: BehaviorSubject<string> = new BehaviorSubject<string>('asc');


  readonly employees$: Observable<EmployeeModel[]> = combineLatest([
    this._filterAgeSubject.asObservable(),
    this._orderPriceSubject.asObservable()
  ]).pipe(
    switchMap(([age, price]: [Age, string]) => this._employeeService.getAll().pipe(
      take(1),
      map((employees) => employees.filter((employees) => employees.employee_age > age.minAge && employees.employee_age < age.maxAge)),
      map((employees) => {
        return employees.sort((employeeA, employeeB) => {
          if (employeeA.employee_salary > employeeB.employee_salary) return price === 'asc' ? 1 : -1;
          if (employeeA.employee_salary < employeeB.employee_salary) return price === 'asc' ? -1 : 1;
          return 0
        })
      }))
    )
  );

  public orders: Observable<string[]> = of(['asc', 'desc'])

  constructor(private _employeeService: EmployeeService) {
  }

  sortAge(minAge: number, maxAge: number): void {
    this._filterAgeSubject.next({maxAge: maxAge, minAge: minAge});
  }

  sortPrice(order: string): void {
    this._orderPriceSubject.next(order);
  }


}
