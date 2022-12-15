import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {delay, Observable} from 'rxjs';
import {CryptoModel} from '../../models/crypto.model';
import {CryptoService} from '../../services/crypto.service';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-crypto-empty-state',
  templateUrl: './crypto-empty-state.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoEmptyStateComponent {
  readonly cryptoList$: Observable<CryptoModel[]> = this._cryptoService.getAll().pipe(
    delay(2000),
    map(() => [])
  );

  constructor(private _cryptoService: CryptoService) {
  }
}
