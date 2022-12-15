import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {delay, Observable} from 'rxjs';
import {CategoriesService} from '../../services/categories.service';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-categories-checkbox-empty-state',
  templateUrl: './categories-checkbox-empty-state.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesCheckboxEmptyStateComponent {
  readonly categoriesList$: Observable<string[]> = this._categoriesService.getAll().pipe(
    delay(2000),
    map(() => [])
  );

  constructor(private _categoriesService: CategoriesService) {
  }
}
