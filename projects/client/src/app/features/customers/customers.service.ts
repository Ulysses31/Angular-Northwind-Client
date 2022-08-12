import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MtApiService } from 'projects/corelib/src/lib/services/mtApiService';
import { CustomersListDto } from '../../models/customers-list-Dto';
import { CustomersDto } from '../../models/customersDto';

@Injectable()
export class CustomersService extends MtApiService<CustomersListDto, CustomersDto> {
	constructor(public override http: HttpClient) {
		super(http);
		this.setApiServiceUrl(
			'http://localhost:3000/v1/customers'
		);
	}
}
