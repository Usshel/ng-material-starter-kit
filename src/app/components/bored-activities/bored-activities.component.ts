import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { BoredService } from '../../services/bored.service';
import {BoredModel} from "../../models/bored.model";

@Component({
  selector: 'app-bored-activities',
  templateUrl: './bored-activities.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoredActivitiesComponent {
  readonly activities$: Observable<BoredModel> = this._activatedRoute.params.pipe(switchMap(
    data => this._boredService.getOne(data['participants']))
  );

  constructor(private _activatedRoute: ActivatedRoute, private _boredService: BoredService) {
  }
}
