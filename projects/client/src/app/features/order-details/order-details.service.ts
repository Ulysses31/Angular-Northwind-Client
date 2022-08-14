import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MtApiService } from 'projects/corelib/src/lib/services/mtApiService';
import { OrderDetailsListDto } from '../../models/order-details-list-Dto';
import { OrderDetailsDto } from '../../models/order-detailsDto';

@Injectable()
export class OrderDetailsService extends MtApiService<OrderDetailsListDto, OrderDetailsDto> {
	constructor(public override http: HttpClient) {
		super(http);
		this.setApiServiceUrl(
			'http://localhost:3000/v1/orderDetails'
		);
	}
}
