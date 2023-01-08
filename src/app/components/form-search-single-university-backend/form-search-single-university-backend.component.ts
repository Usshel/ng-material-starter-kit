import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, Observable, of, startWith, switchMap } from 'rxjs';
import { CountryModel } from '../../models/country.model';
import { UniversityService } from '../../services/university.service';

@Component({
  selector: 'app-form-search-single-university-backend',
  templateUrl: './form-search-single-university-backend.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormSearchSingleUniversityBackendComponent {
 
  readonly search: FormControl = new FormControl()
  readonly listUniversities$: Observable<CountryModel[] | undefined> = 
  this.search.valueChanges.pipe(
    debounceTime(1000),
    switchMap((search) => search ? this._universityService.getAllByCountry(search) ?? of([]) : of(undefined))
    );
  constructor(private _universityService: UniversityService) {
  }
}
