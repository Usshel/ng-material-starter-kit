import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, combineLatest, map, startWith } from 'rxjs';
import { filter, shareReplay } from 'rxjs/operators';
import { CarBrandsModel } from '../../models/car-brands.model';
import { CarSecurityFeaturesModel } from '../../models/car-security-features.model';
import { CarComfortFeaturesModel } from '../../models/car-comfort-features.model';
import { CarsModel } from '../../models/cars.model';
import { FormAutocompleteMultiCarsService } from '../../services/form-autocomplete-multi-cars.service';

@Component({
  selector: 'app-form-autocomplete-multi-cars',
  templateUrl: './form-autocomplete-multi-cars.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormAutocompleteMultiCarsComponent {
  readonly listCars$: Observable<CarsModel[]> = this._formAutocompleteMultiCarsService.getAllCars();
  readonly listBrands$: Observable<CarBrandsModel[]> = this._formAutocompleteMultiCarsService.getAllBrands();
  readonly listSF$: Observable<CarSecurityFeaturesModel[]> = this._formAutocompleteMultiCarsService.getAllSF();
  readonly listCF$: Observable<CarComfortFeaturesModel[]> = this._formAutocompleteMultiCarsService.getAllCF();


  readonly search: FormGroup = new FormGroup({
    searchBrand: new FormControl(),
    searchSecurityF: new FormControl(),
    searchComfortF: new FormControl()
  });

  readonly searchStartWith$ = this.search.valueChanges.pipe(
    startWith({
      searchBrand: '',
      searchSecurityF: '',
      searchComfortF: ''
    }),
    shareReplay(1)
  );
 
  readonly filteredListBrands$: Observable<CarBrandsModel[]> = combineLatest([
    this._formAutocompleteMultiCarsService.getAllBrands(),
    this.searchStartWith$
  ]).pipe(
    map(([brand, inputBrand]) => brand.filter(
      brand => brand.name.toLowerCase().includes(inputBrand.searchBrand ? inputBrand.searchBrand.toLowerCase() : '') ))
  );

  readonly filteredListSF$: Observable<CarSecurityFeaturesModel[]> = combineLatest([
    this._formAutocompleteMultiCarsService.getAllSF(),
    this.searchStartWith$
  ]).pipe(
    map(([sf, inputBrand]) => sf.filter(
      sf => sf.name.toLowerCase().includes(inputBrand.searchSecurityF ? inputBrand.searchSecurityF.toLowerCase() : '')) )
  );

  readonly filteredListCF$: Observable<CarComfortFeaturesModel[]> = combineLatest([
    this._formAutocompleteMultiCarsService.getAllCF(),
    this.searchStartWith$
  ]).pipe(
    map(([cf, inputBrand]) => cf.filter(
      cf => cf.name.toLowerCase().includes(inputBrand. searchComfortF ? inputBrand. searchComfortF.toLowerCase() : '' )))
  );


  readonly filteredMappedCars$: Observable<
  {
    brand: string;
    model: string;
    comfortFeatures: string[];
    securityFeatures: string[];
  }[]
  > = combineLatest([
    this._formAutocompleteMultiCarsService.getAllCars(),
    this.listBrands$,
    this.listCF$,
    this.listSF$,
    this.searchStartWith$
  ]).pipe(
    map(([cars, brands, cfs, sfs, searchForm]) =>{
      const brandMap = brands.reduce((a, c) =>{
        return { ...a, [c.id]: c} ;
      }, {}) as Record<string, CarBrandsModel>;

      const cfsMap = cfs.reduce((a, c) =>{
        return { ...a, [c.id]: c };
      }, {}) as Record<string, CarComfortFeaturesModel>;

      const sfsMap = sfs.reduce((a, c) =>{
        return { ...a, [c.id]: c };
      }, {}) as Record<string, CarSecurityFeaturesModel>;

      return cars
      .filter(
        (car) =>
        (!searchForm.searchBrand ||
          searchForm.searchBrand?.trim().length === 0 ||
          brandMap[car.brandId]?.name === searchForm.searchBrand) &&
          (!searchForm.searchSecurityF ||
            searchForm.searchSecurityF?.trim().length === 0 ||
            car.securityFeatureIds
              .map((sf)=> sfsMap[sf]?.name)
              .includes(searchForm.searchSecurityF)) &&
            (!searchForm.searchComfortF ||
              searchForm.searchComfortF?.trim().length === 0 ||
              car.comfortFeatureIds
                .map((cf) => cfsMap[cf]?.name)
                .includes(searchForm.searchComfortF))
      )
      .map((car)=> {
        return{
          brand: brandMap[car.brandId]?.name,
          model: car.model,
          comfortFeatures: (car.comfortFeatureIds ?? []).map(
            (cf) => cfsMap[cf]?.name
          ),
          securityFeatures: (car.securityFeatureIds ?? []).map(
            (sf) => sfsMap[sf]?.name
          )
        }
      })

    })
    );


  

  constructor(private _formAutocompleteMultiCarsService: FormAutocompleteMultiCarsService) {
  }

  onSearchSubmitted(search: FormGroup): void {
  }
}
