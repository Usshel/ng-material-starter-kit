import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {BeerModel} from '../../models/beer.model';
import {BeersService} from '../../services/beers.service';

@Component({
  selector: 'app-beers-with-pagination',
  templateUrl: './beers-with-pagination.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeersWithPaginationComponent {
  readonly beers$: Observable<BeerModel[]> = this._beersService.getAll(1);
  private _pageSubject: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  public page$: Observable<number> = this._pageSubject.asObservable();

  constructor(private _beersService: BeersService) {
  }
}
