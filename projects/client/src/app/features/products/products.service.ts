import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MtApiService } from 'projects/corelib/src/lib/services/mtApiService';
import { ProductsListDto } from '../../models/products-list-Dto';
import { ProductsDto } from '../../models/productsDto';

@Injectable()
export class ProductsService extends MtApiService<ProductsListDto, ProductsDto> {
	constructor(public override http: HttpClient) {
		super(http);
		this.setApiServiceUrl(
			'http://localhost:3000/v1/products'
		);
	}
}
