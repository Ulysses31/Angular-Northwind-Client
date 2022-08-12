import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MtApiService } from 'projects/corelib/src/lib/services/mtApiService';
import { RegionsListDto } from '../../models/regions-list-Dto';
import { RegionsDto } from '../../models/regionsDto';

@Injectable()
export class RegionsService extends MtApiService<RegionsListDto, RegionsDto> {
	constructor(public override http: HttpClient) {
		super(http);
		this.setApiServiceUrl(
			'http://localhost:3000/v1/regions'
		);
	}
}
