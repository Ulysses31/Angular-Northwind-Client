import { tap } from 'rxjs/operators';
import { ChangeDetectorRef, Injectable } from '@angular/core';
import { MtBaseSearchModel } from 'projects/corelib/src/lib/models/base-search-model';
import { Observable } from 'rxjs/internal/Observable';
import { AppBaseListViewModelService } from '../../core/app-base-list-viewmodel.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OrderDetailsListDto } from '../../models/order-details-list-Dto';
import { OrderDetailsService } from './order-details.service';

@Injectable()
export class OrderDetailsViewModelService extends AppBaseListViewModelService<OrderDetailsListDto> {
	constructor(
		public override snackBar: MatSnackBar,
		private orderDetailsService: OrderDetailsService
	) {
		super(snackBar);
		console.log('[OnInit OrderDetailsViewModelService]');
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
	): Observable<OrderDetailsListDto[]> {
		console.log(
			`OrderDetails viewmodel search called...fetching ${this.orderDetailsService.getApiServiceUrl()}`
		);
		return this.orderDetailsService.getAll();
	}

	getById(id: string): Observable<OrderDetailsListDto> {
		console.log(
			`OrderDetails viewmodel getById called...fetching ${this.orderDetailsService.getApiServiceUrl()}`
		);
		return this.orderDetailsService.getById(id);
	}
}
