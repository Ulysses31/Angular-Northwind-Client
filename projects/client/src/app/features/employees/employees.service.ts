import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MtApiService } from 'projects/corelib/src/lib/services/mtApiService';
import { EmployeesListDto } from '../../models/employees-list-Dto';
import { EmployeesDto } from '../../models/employeesDto';

@Injectable()
export class EmployeesService extends MtApiService<EmployeesListDto, EmployeesDto> {
	constructor(public override http: HttpClient) {
		super(http);
		this.setApiServiceUrl(
			'http://localhost:3000/v1/employees'
		);
	}
}
