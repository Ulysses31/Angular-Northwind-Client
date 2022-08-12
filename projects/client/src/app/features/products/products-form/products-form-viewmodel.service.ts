import { Injectable, Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AppBaseViewModelService } from '../../../core/app-base-viewmodel.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import { ProductsDto } from '../../../models/productsDto';
import { ProductsService } from '../products.service';

@Injectable()
export class ProductsFormViewModelService extends AppBaseViewModelService<ProductsDto> {
  constructor(
		public override injector: Injector,
		private productsService: ProductsService,
    public override dialog: MatDialog,
    public override snackBar: MatSnackBar,
    public override route: ActivatedRoute,
    public override router: Router
	) {
		super(injector, dialog, snackBar, route, router);
	}

	override ngOnInit(): void {
		super.ngOnInit();
	}

	override ngAfterViewInit(): void {
		super.ngAfterViewInit();

	}

	override ngOnDestroy(): void {
		super.ngOnDestroy();
	}

	getById(id: string): Observable<ProductsDto> {
		console.log(
			`Products Form viewmodel getById called...fetching ${this.productsService.getApiServiceUrl()}`
		);
		return this.productsService.getById(id);
	}

	postDto(item: ProductsDto): Observable<ProductsDto> {
		console.log('postCb from ProductsFormViewModelService');
		return this.productsService.insert(item);
	}

	putDto(id: string, item: ProductsDto): Observable<ProductsDto> {
		console.log('putCb from ProductsFormViewModelService');
		return this.productsService.update(id, item);
	}

	deleteDto(id: string): Observable<void> {
		console.log('deleteCb from ProductsFormViewModelService');
		return this.productsService.delete(id);
	}

	resetDto(item: ProductsDto): Observable<ProductsDto> {
		item = {
      ProductID: 0,
      ProductName: null,
      SupplierID: 0,
      CategoryID: 0,
      QuantityPerUnit: null,
      UnitPrice: 0,
      UnitsInStock: 0,
      UnitsOnOrder: 0,
      ReorderLevel: 0,
      Discontinued: false
		};
		return of(item);
	}
}
