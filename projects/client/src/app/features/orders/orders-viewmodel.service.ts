import { Injectable } from '@angular/core';
import { MtBaseSearchModel } from 'projects/corelib/src/lib/models/base-search-model';
import { Observable } from 'rxjs/internal/Observable';
import { AppBaseListViewModelService } from '../../core/app-base-list-viewmodel.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OrdersListDto } from '../../models/orders-list-Dto';
import { OrdersService } from './orders.service';
import { tap } from 'rxjs/operators';
import { formatDateMtDatePicker } from '../../shared/shared-repo';

@Injectable()
export class OrdersViewModelService extends AppBaseListViewModelService<OrdersListDto> {
	constructor(
		public override snackBar: MatSnackBar,
		private ordersService: OrdersService
	) {
		super(snackBar);
		console.log('[OnInit OrdersViewModelService]');
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

	search(
		searchModel: MtBaseSearchModel
	): Observable<OrdersListDto[]> {
		console.log(
			`Orders viewmodel search called...fetching ${this.ordersService.getApiServiceUrl()}`
		);
		return this.ordersService.getAll().pipe(
			tap((result: any) => {
				const dto = result.data as OrdersListDto[];

				dto.map((item) => {
					item.OrderDate = formatDateMtDatePicker(
						new Date(item.OrderDate!).toDateString()
					) as any;
					item.RequiredDate = formatDateMtDatePicker(
						new Date(item.RequiredDate!).toDateString()
					) as any;
					item.ShippedDate = formatDateMtDatePicker(
						new Date(item.ShippedDate!).toDateString()
					) as any;
				});
			})
		);
	}

	getById(id: string): Observable<OrdersListDto> {
		console.log(
			`Orders viewmodel getById called...fetching ${this.ordersService.getApiServiceUrl()}`
		);
		return this.ordersService.getById(id);
	}
}
