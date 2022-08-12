import { Injectable, Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AppBaseViewModelService } from '../../../core/app-base-viewmodel.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import { CustomersDto } from '../../../models/customersDto';
import { CustomersService } from '../customers.service';

@Injectable()
export class CustomersFormViewModelService extends AppBaseViewModelService<CustomersDto> {
  constructor(
		public override injector: Injector,
		private customersService: CustomersService,
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

	getById(id: string): Observable<CustomersDto> {
		console.log(
			`Customers Form viewmodel getById called...fetching ${this.customersService.getApiServiceUrl()}`
		);
		return this.customersService.getById(id);
	}

	postDto(item: CustomersDto): Observable<CustomersDto> {
		console.log('postCb from CustomersFormViewModelService');
		return this.customersService.insert(item);
	}

	putDto(id: string, item: CustomersDto): Observable<CustomersDto> {
		console.log('putCb from CustomersFormViewModelService');
		return this.customersService.update(id, item);
	}

	deleteDto(id: string): Observable<void> {
		console.log('deleteCb from CustomersFormViewModelService');
		return this.customersService.delete(id);
	}

	resetDto(item: CustomersDto): Observable<CustomersDto> {
		item = {
      CustomerID: null,
      CompanyName: null,
      ContactTitle: null,
      Address: null,
      City: null,
      Region: null,
      PostalCode: null,
      Country: null,
      Phone: null,
      Fax: null
		};
		return of(item);
	}
}
