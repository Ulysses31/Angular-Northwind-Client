import { RegionsService } from './../regions.service';
import { Injectable, Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AppBaseViewModelService } from '../../../core/app-base-viewmodel.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import { RegionsDto } from '../../../models/regionsDto';

@Injectable()
export class RegionsFormViewModelService extends AppBaseViewModelService<RegionsDto> {
  constructor(
		public override injector: Injector,
		private regionsService: RegionsService,
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

	getById(id: string): Observable<RegionsDto> {
		console.log(
			`Regions Form viewmodel getById called...fetching ${this.regionsService.getApiServiceUrl()}`
		);
		return this.regionsService.getById(id);
	}

	postDto(item: RegionsDto): Observable<RegionsDto> {
		console.log('postCb from RegionsFormViewModelService');
		return this.regionsService.insert(item);
	}

	putDto(id: string, item: RegionsDto): Observable<RegionsDto> {
		console.log('putCb from RegionsFormViewModelService');
		return this.regionsService.update(id, item);
	}

	deleteDto(id: string): Observable<void> {
		console.log('deleteCb from RegionsFormViewModelService');
		return this.regionsService.delete(id);
	}

	resetDto(item: RegionsDto): Observable<RegionsDto> {
		item = {
      RegionDescription: null
		};
		return of(item);
	}
}
