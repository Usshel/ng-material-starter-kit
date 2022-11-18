import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesModel } from '../../models/categories.model';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-categories-selection',
  styleUrls: ['./categories-selection.component.scss'],
  templateUrl: './categories-selection.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesSelectionComponent {
  readonly categoriesSelection$: Observable<CategoriesModel[]> = this._categoriesService.getAll();



  constructor(private _categoriesService: CategoriesService) {
  }


}
