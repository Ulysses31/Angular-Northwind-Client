import { Injectable, Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AppBaseViewModelService } from '../../../core/app-base-viewmodel.service';
import { CategoriesDto } from '../../../models/categoriesDto';
import { CategoriesService } from '../categories.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class CategoriesFormViewModelService extends AppBaseViewModelService<CategoriesDto> {
  constructor(
		public override injector: Injector,
		private categoriesService: CategoriesService,
    public override snackBar: MatSnackBar,
    public override route: ActivatedRoute,
    public override router: Router
	) {
		super(injector, snackBar, route, router);
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

	getById(id: string): Observable<CategoriesDto> {
		console.log(
			`Categories Form viewmodel getById called...fetching ${this.categoriesService.getApiServiceUrl()}`
		);
		return this.categoriesService.getById(id);
	}

	postDto(item: CategoriesDto): Observable<CategoriesDto> {
		console.log('postCb from CategoriesFormViewModelService');
		return this.categoriesService.insert(item);
	}

	putDto(id: string, item: CategoriesDto): Observable<CategoriesDto> {
		console.log('putCb from CategoriesFormViewModelService');
		return this.categoriesService.update(id, item);
	}

	deleteDto(id: string): Observable<void> {
		console.log('deleteCb from CategoriesFormViewModelService');
		return this.categoriesService.delete(id);
	}

	resetDto(item: CategoriesDto): Observable<CategoriesDto> {
		item = {
			CategoryName: null,
			Description: null,
		};
		return of(item);
	}
}
