import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MtApiService } from 'projects/corelib/src/lib/services/mtApiService';
import { EmployeeTerritoriesListDto } from '../../models/employee-territories-list-Dto';
import { EmployeeTerritoriesDto } from '../../models/employee-territoriesDto';

@Injectable()
export class EmployeeTerritoriesService extends MtApiService<EmployeeTerritoriesListDto, EmployeeTerritoriesDto> {
	constructor(public override http: HttpClient) {
		super(http);
		this.setApiServiceUrl(
			'http://localhost:3000/v1/employeeTerritories'
		);
	}
}
