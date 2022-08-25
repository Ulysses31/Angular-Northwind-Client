import { OrderDetailsDto } from './../../../models/order-detailsDto';
import { EventEmitter, Injectable, Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, tap } from 'rxjs';
import { AppBaseViewModelService } from '../../../core/app-base-viewmodel.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { formatDateMtDatePicker } from '../../../shared/shared-repo';
import { OrdersFullDto } from '../../../models/ordersFullDto';
import { OrdersFullService } from './orders-full.service';

@Injectable()
export class OrdersFullFormViewModelService extends AppBaseViewModelService<OrdersFullDto> {
	constructor(
		public override injector: Injector,
		private ordersFullService: OrdersFullService,
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

	getById(id: string): Observable<OrdersFullDto> {
		console.log(
			`OrdersFull Form viewmodel getById called...fetching ${this.ordersFullService.getApiServiceUrl()}`
		);
		return this.ordersFullService.getById(id).pipe(
			tap((result: any) => {
				const dto = result.data as OrdersFullDto;
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

	postDto(item: OrdersFullDto): Observable<OrdersFullDto> {
		console.log('postCb from OrdersFullFormViewModelService');
		return this.ordersFullService.insert(item);
	}

	putDto(id: string, item: OrdersFullDto): Observable<OrdersFullDto> {
		console.log('putCb from OrdersFullFormViewModelService');
		return this.ordersFullService.update(id, item);
	}

	deleteDto(id: string): Observable<void> {
		console.log('deleteCb from OrdersFullFormViewModelService');
		return this.ordersFullService.delete(id);
	}

	resetDto(item: OrdersFullDto): Observable<OrdersFullDto> {
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
