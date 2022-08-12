import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MtApiService } from 'projects/corelib/src/lib/services/mtApiService';
import { TerritoriesListDto } from '../../models/territories-list-Dto';
import { TerritoriesDto } from '../../models/territoriesDto';

@Injectable()
export class TerritoriesService extends MtApiService<TerritoriesListDto, TerritoriesDto> {
	constructor(public override http: HttpClient) {
		super(http);
		this.setApiServiceUrl(
			'http://localhost:3000/v1/territories'
		);
	}
}
