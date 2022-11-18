import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { HolidaysModel } from '../../models/holidays.model';
import { HolidaysService } from '../../services/holidays.service';

@Component({
  selector: 'app-holidays-list',
  styleUrls: ['./holidays-list.component.scss'],
  templateUrl: './holidays-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HolidaysListComponent {
  readonly HolidaysList$: Observable<HolidaysModel[]> = this._holidaysService.getAll();

  constructor(private _holidaysService: HolidaysService) {
  }
}
