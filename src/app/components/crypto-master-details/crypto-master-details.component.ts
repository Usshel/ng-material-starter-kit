import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {CryptoModel} from '../../models/crypto.model';
import {CryptoService} from '../../services/crypto.service';

@Component({
  selector: 'app-crypto-master-details',
  templateUrl: './crypto-master-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoMasterDetailsComponent {
  readonly cryptoList$: Observable<CryptoModel[]> = this._cryptoService.getAll();
  private _detailsSubject: Subject<CryptoModel> = new Subject<CryptoModel>();
  public details$: Observable<CryptoModel> = this._detailsSubject.asObservable();

  constructor(private _cryptoService: CryptoService) {
  }

  selectedCryptoDetails(crypto: CryptoModel): void {
    this._detailsSubject.next(crypto);
  }
}
