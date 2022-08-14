import { Injectable, Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, tap } from 'rxjs';
import { AppBaseViewModelService } from '../../../core/app-base-viewmodel.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { OrdersDto } from '../../../models/ordersDto';
import { formatDateMtDatePicker } from '../../../shared/shared-repo';
import { OrdersService } from '../orders.service';

@Injectable()
export class OrdersFormViewModelService extends AppBaseViewModelService<OrdersDto> {
	constructor(
		public override injector: Injector,
		private ordersService: OrdersService,
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

	getById(id: string): Observable<OrdersDto> {
		console.log(
			`Orders Form viewmodel getById called...fetching ${this.ordersService.getApiServiceUrl()}`
		);
		return this.ordersService.getById(id).pipe(
			tap((result: any) => {
				const dto = result.data as OrdersDto;
				dto.OrderDate = formatDateMtDatePicker(
					new Date(dto.OrderDate!).toDateString()
				) as any;
				dto.RequiredDate = formatDateMtDatePicker(
					new Date(dto.RequiredDate!).toDateString()
				) as any;
				dto.ShippedDate = formatDateMtDatePicker(
					new Date(dto.ShippedDate!).toDateString()
				) as any;
			})
		);
	}

	postDto(item: OrdersDto): Observable<OrdersDto> {
		console.log('postCb from OrdersFormViewModelService');
		return this.ordersService.insert(item);
	}

	putDto(id: string, item: OrdersDto): Observable<OrdersDto> {
		console.log('putCb from OrdersFormViewModelService');
		return this.ordersService.update(id, item);
	}

	deleteDto(id: string): Observable<void> {
		console.log('deleteCb from OrdersFormViewModelService');
		return this.ordersService.delete(id);
	}

	resetDto(item: OrdersDto): Observable<OrdersDto> {
		item = {
			OrderID: 0,
			CustomerID: null,
			EmployeeID: 0,
			OrderDate: formatDateMtDatePicker(
				new Date().toDateString()
			) as any,
			RequiredDate: formatDateMtDatePicker(
				new Date().toDateString()
			) as any,
			ShippedDate: formatDateMtDatePicker(
				new Date().toDateString()
			) as any,
			ShipVia: 0,
			Freight: 0,
			ShipName: null,
			ShipAddress: null,
			ShipCity: null,
			ShipRegion: null,
			ShipPostalCode: null,
			ShipCountry: null
		};
		return of(item);
	}
}
