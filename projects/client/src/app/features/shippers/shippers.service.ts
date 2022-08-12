import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MtApiService } from 'projects/corelib/src/lib/services/mtApiService';
import { ShippersListDto } from '../../models/shippers-list-Dto';
import { ShippersDto } from '../../models/shippersDto';

@Injectable()
export class ShippersService extends MtApiService<ShippersListDto, ShippersDto> {
	constructor(public override http: HttpClient) {
		super(http);
		this.setApiServiceUrl(
			'http://localhost:3000/v1/shippers'
		);
	}
}
