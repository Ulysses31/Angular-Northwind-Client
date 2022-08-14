import { Injectable, Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AppBaseViewModelService } from '../../../core/app-base-viewmodel.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import { OrderDetailsDto } from '../../../models/order-detailsDto';
import { OrderDetailsService } from '../order-details.service';

@Injectable()
export class OrderDetailsFormViewModelService extends AppBaseViewModelService<OrderDetailsDto> {
  constructor(
		public override injector: Injector,
		private orderDetailsService: OrderDetailsService,
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

	getById(id: string): Observable<OrderDetailsDto> {
		console.log(
			`OrderDetails Form viewmodel getById called...fetching ${this.orderDetailsService.getApiServiceUrl()}`
		);
		return this.orderDetailsService.getById(id);
	}

	postDto(item: OrderDetailsDto): Observable<OrderDetailsDto> {
		console.log('postCb from OrderDetailsFormViewModelService');
		return this.orderDetailsService.insert(item);
	}

	putDto(id: string, item: OrderDetailsDto): Observable<OrderDetailsDto> {
		console.log('putCb from OrderDetailsFormViewModelService');
		return this.orderDetailsService.update(id, item);
	}

	deleteDto(id: string): Observable<void> {
		console.log('deleteCb from OrderDetailsFormViewModelService');
		return this.orderDetailsService.delete(id);
	}

	resetDto(item: OrderDetailsDto): Observable<OrderDetailsDto> {
		item = {
      OrderID: 0,
      ProductID: 0,
      UnitPrice: 0,
      Quantity: 0,
      Discount: 0
		};
		return of(item);
	}
}
