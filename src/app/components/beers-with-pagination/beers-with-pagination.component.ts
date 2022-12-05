import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {BeerModel} from '../../models/beer.model';
import {BeersService} from '../../services/beers.service';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-beers-with-pagination',
  templateUrl: './beers-with-pagination.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeersWithPaginationComponent {
  readonly beers$: Observable<BeerModel[]> = this._beersService.getAll(2);
  private _pageSubject: BehaviorSubject<number> = new BehaviorSubject<number>(1)
  public page$: Observable<number> = combineLatest([
    this._pageSubject.asObservable(),
    this.beers$
  ]).pipe(
    map(([page, beers]: [number, BeerModel[]]) => (page))
  )

  constructor(private _beersService: BeersService) {
  }
}
