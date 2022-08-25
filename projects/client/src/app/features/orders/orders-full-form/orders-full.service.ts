import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MtApiService } from 'projects/corelib/src/lib/services/mtApiService';
import { OrdersFullDto } from '../../../models/ordersFullDto';

@Injectable()
export class OrdersFullService extends MtApiService<OrdersFullDto, OrdersFullDto> {
	constructor(public override http: HttpClient) {
		super(http);
		this.setApiServiceUrl(
			'http://localhost:3000/v1/orders-complete'
		);
	}
}
