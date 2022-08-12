import { Injectable, Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AppBaseViewModelService } from '../../../core/app-base-viewmodel.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import { EmployeeTerritoriesDto } from '../../../models/employee-territoriesDto';
import { EmployeeTerritoriesService } from '../employee-territories.service';

@Injectable()
export class EmployeeTerritoriesFormViewModelService extends AppBaseViewModelService<EmployeeTerritoriesDto> {
  constructor(
		public override injector: Injector,
		private employeeTerritoriesService: EmployeeTerritoriesService,
    public override dialog: MatDialog,
    public override snackBar: MatSnackBar,
    public override route: ActivatedRoute,
    public override router: Router
	) {
		super(injector, dialog, snackBar, route, router);
	}

	override ngOnInit(): void {
		super.ngOnInit();
	}

	override ngAfterViewInit(): void {
		super.ngAfterViewInit();

	}

	override ngOnDestroy(): void {
		super.ngOnDestroy();
	}

	getById(id: string): Observable<EmployeeTerritoriesDto> {
		console.log(
			`EmployeeTerritories Form viewmodel getById called...fetching ${this.employeeTerritoriesService.getApiServiceUrl()}`
		);
		return this.employeeTerritoriesService.getById(id);
	}

	postDto(item: EmployeeTerritoriesDto): Observable<EmployeeTerritoriesDto> {
		console.log('postCb from EmployeeTerritoriesFormViewModelService');
		return this.employeeTerritoriesService.insert(item);
	}

	putDto(id: string, item: EmployeeTerritoriesDto): Observable<EmployeeTerritoriesDto> {
		console.log('putCb from EmployeeTerritoriesFormViewModelService');
		return this.employeeTerritoriesService.update(id, item);
	}

	deleteDto(id: string): Observable<void> {
		console.log('deleteCb from EmployeeTerritoriesFormViewModelService');
		return this.employeeTerritoriesService.delete(id);
	}

	resetDto(item: EmployeeTerritoriesDto): Observable<EmployeeTerritoriesDto> {
		item = {
			EmployeeID: 0,
      TerritoryID: null
		};
		return of(item);
	}
}
