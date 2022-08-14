import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MtApiService } from 'projects/corelib/src/lib/services/mtApiService';
import { OrdersListDto } from '../../models/orders-list-Dto';
import { OrdersDto } from '../../models/ordersDto';

@Injectable()
export class OrdersService extends MtApiService<OrdersListDto, OrdersDto> {
	constructor(public override http: HttpClient) {
		super(http);
		this.setApiServiceUrl(
			'http://localhost:3000/v1/orders'
		);
	}
}
