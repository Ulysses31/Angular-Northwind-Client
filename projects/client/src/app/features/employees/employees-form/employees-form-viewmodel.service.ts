import { Injectable, Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, tap } from 'rxjs';
import { AppBaseViewModelService } from '../../../core/app-base-viewmodel.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { EmployeesDto } from '../../../models/employeesDto';
import { EmployeesService } from '../employees.service';
import { formatDateMtDatePicker } from '../../../shared/shared-repo';

@Injectable()
export class EmployeesFormViewModelService extends AppBaseViewModelService<EmployeesDto> {
	constructor(
		public override injector: Injector,
		private employeesService: EmployeesService,
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

	getById(id: string): Observable<EmployeesDto> {
		console.log(
			`Employees Form viewmodel getById called...fetching ${this.employeesService.getApiServiceUrl()}`
		);
		return this.employeesService.getById(id).pipe(
			tap((result: any) => {
				const dto = result.data as EmployeesDto;
				dto.BirthDate = formatDateMtDatePicker(
					new Date(dto.BirthDate!).toDateString()
				) as any;
				dto.HireDate = formatDateMtDatePicker(
					new Date(dto.HireDate!).toDateString()
				) as any;
			})
		);
	}

	postDto(item: EmployeesDto): Observable<EmployeesDto> {
		console.log('postCb from EmployeesFormViewModelService');
		return this.employeesService.insert(item);
	}

	putDto(id: string, item: EmployeesDto): Observable<EmployeesDto> {
		console.log('putCb from EmployeesFormViewModelService');
		return this.employeesService.update(id, item);
	}

	deleteDto(id: string): Observable<void> {
		console.log('deleteCb from EmployeesFormViewModelService');
		return this.employeesService.delete(id);
	}

	resetDto(item: EmployeesDto): Observable<EmployeesDto> {
		item = {
			LastName: null,
			FirstName: null,
			Title: null,
			TitleOfCourtesy: null,
			BirthDate: formatDateMtDatePicker(
				new Date().toDateString()
			) as any,
			HireDate: formatDateMtDatePicker(
				new Date().toDateString()
			) as any,
			Address: null,
			City: null,
			Region: null,
			PostalCode: null,
			Country: null,
			HomePhone: null,
			Extension: null,
			Notes: null,
			ReportsTo: 0,
			PhotoPath: null
		};
		return of(item);
	}
}
