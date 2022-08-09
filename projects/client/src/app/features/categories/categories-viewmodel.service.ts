import { ChangeDetectorRef, Injectable } from '@angular/core';
import { MtBaseSearchModel } from 'projects/corelib/src/lib/models/base-search-model';
import { Observable } from 'rxjs/internal/Observable';
import { AppBaseListViewModelService } from '../../core/app-base-list-viewmodel.service';
import { CategoriesListDto } from '../../models/categories-list-Dto';
import { CategoriesService } from './categories.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class CategoriesViewModelService
  extends AppBaseListViewModelService<CategoriesListDto> {

  constructor(
    public override snackBar: MatSnackBar,
    private categoriesService: CategoriesService
    ) {
    super(snackBar);
    console.log('[OnInit CategoriesViewModelService]');
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

  search(searchModel: MtBaseSearchModel): Observable<CategoriesListDto[]> {
    console.log(
      `Categories viewmodel search called...fetching ${this.categoriesService.getApiServiceUrl()}`
    );
    return this.categoriesService.getAll();
  }

  getById(id: string): Observable<CategoriesListDto> {
    console.log(
      `Categories viewmodel getById called...fetching ${this.categoriesService.getApiServiceUrl()}`
    );
    return this.categoriesService.getById(id);
  }
}
