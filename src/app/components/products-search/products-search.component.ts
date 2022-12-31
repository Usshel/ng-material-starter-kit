import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BehaviorSubject, combineLatest, debounceTime, Observable} from 'rxjs';
import {ProductModel} from '../../models/product.model';
import {ProductService} from '../../services/product.service';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-products-search',
  templateUrl: './products-search.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsSearchComponent {

  readonly search: FormGroup = new FormGroup({title: new FormControl()});

  //Have to be only when reloading products on button. When User clicks the button triggers "onSearchSubmitted" method -
  //which send value to the _startWithSubject:BehaviorSubject<string>
  private _startWithSubject: BehaviorSubject<string> = new BehaviorSubject<string>(''); 

  //In case with "reload on button" after "=" would be this._startsWithSubject.asObservable(); without pipe and following code
  //But in case with "reload on typing" there is "this.search.valueChanges" because it automatically from form send string after one second
  public startWith$: Observable<string> = this.search.valueChanges.pipe(
    map(form => form.title),
    debounceTime(1000) 
    //DebounceTime is a method which delay function execution or action for peroid of inserted time.
  );


  readonly productsList$: Observable<ProductModel[]> = combineLatest([
    this._productService.getAll(),
    this.startWith$
  ]).pipe(
    map(([products, startWith]) =>{ 
      if (!startWith)
      {
        return [];
      }else
      {
        return products.filter(product => product.title.startsWith(startWith));
      };
      
    })
  );


  //Have to combineLatest getAll with subject which has a searched string
  constructor(private _productService: ProductService) {
  }
  
  //Method which connects HTML with Logic: from html gets the value from form and sents it to the Observable.
  onSearchSubmitted(search: FormGroup): void {
    this._startWithSubject.next((search.get('title')?.value))
  }
}
