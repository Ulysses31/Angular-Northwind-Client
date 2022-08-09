import { CategoriesListDto } from './../../models/categories-list-Dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoriesDto } from '../../models/categoriesDto';
import { MtApiService } from 'projects/corelib/src/lib/services/mtApiService';

@Injectable()
export class CategoriesService extends MtApiService<CategoriesListDto, CategoriesDto> {
	constructor(public override http: HttpClient) {
		super(http);
		this.setApiServiceUrl(
			'http://localhost:3000/v1/categories'
		);
	}
}
