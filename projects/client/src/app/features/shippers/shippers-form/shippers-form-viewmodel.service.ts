import { Injectable, Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AppBaseViewModelService } from '../../../core/app-base-viewmodel.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import { ShippersDto } from '../../../models/shippersDto';
import { ShippersService } from '../shippers.service';

@Injectable()
export class ShippersFormViewModelService extends AppBaseViewModelService<ShippersDto> {
  constructor(
		public override injector: Injector,
		private shippersService: ShippersService,
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

	getById(id: string): Observable<ShippersDto> {
		console.log(
			`Shippers Form viewmodel getById called...fetching ${this.shippersService.getApiServiceUrl()}`
		);
		return this.shippersService.getById(id);
	}

	postDto(item: ShippersDto): Observable<ShippersDto> {
		console.log('postCb from ShippersFormViewModelService');
		return this.shippersService.insert(item);
	}

	putDto(id: string, item: ShippersDto): Observable<ShippersDto> {
		console.log('putCb from ShippersFormViewModelService');
		return this.shippersService.update(id, item);
	}

	deleteDto(id: string): Observable<void> {
		console.log('deleteCb from ShippersFormViewModelService');
		return this.shippersService.delete(id);
	}

	resetDto(item: ShippersDto): Observable<ShippersDto> {
		item = {
			CompanyName: null,
      Phone: null
		};
		return of(item);
	}
}
