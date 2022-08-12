import { Injectable, Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AppBaseViewModelService } from '../../../core/app-base-viewmodel.service';
import { TerritoriesService } from '../Territories.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import { TerritoriesDto } from '../../../models/territoriesDto';

@Injectable()
export class TerritoriesFormViewModelService extends AppBaseViewModelService<TerritoriesDto> {
  constructor(
		public override injector: Injector,
		private territoriesService: TerritoriesService,
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

	getById(id: string): Observable<TerritoriesDto> {
		console.log(
			`Territories Form viewmodel getById called...fetching ${this.territoriesService.getApiServiceUrl()}`
		);
		return this.territoriesService.getById(id);
	}

	postDto(item: TerritoriesDto): Observable<TerritoriesDto> {
		console.log('postCb from TerritoriesFormViewModelService');
		// item.RegionID = parseInt(item.RegionID!.toString());
    return this.territoriesService.insert(item);
	}

	putDto(id: string, item: TerritoriesDto): Observable<TerritoriesDto> {
		console.log('putCb from TerritoriesFormViewModelService');
		return this.territoriesService.update(id, item);
	}

	deleteDto(id: string): Observable<void> {
		console.log('deleteCb from TerritoriesFormViewModelService');
		return this.territoriesService.delete(id);
	}

	resetDto(item: TerritoriesDto): Observable<TerritoriesDto> {
		item = {
      TerritoryID: null,
      TerritoryDescription: null,
      RegionID: 0
		};
		return of(item);
	}
}
