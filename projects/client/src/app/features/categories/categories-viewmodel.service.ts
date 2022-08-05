import { Injectable } from '@angular/core';
import { MtBaseSearchModel } from 'projects/corelib/src/lib/models/base-search-model';
import { Observable } from 'rxjs/internal/Observable';
import { AppBaseListViewModelService } from '../../core/app-base-list-viewmodel.service';
import { CategoriesDto } from '../../models/categoriesDto';
import { CategoriesService } from './categories.service';

@Injectable()
export class CategoriesViewModelService
  extends AppBaseListViewModelService<CategoriesDto> {

  constructor(private categoriesService: CategoriesService) {
    super();
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

  search(searchModel: MtBaseSearchModel): Observable<CategoriesDto[]> {
    console.log(
      `Categories viewmodel search called...fetching ${this.categoriesService.getApiServiceUrl()}`
    );
    return this.categoriesService.getAll();
  }

  getById(id: string): Observable<CategoriesDto> {
    console.log(
      `Categories viewmodel getById called...fetching ${this.categoriesService.getApiServiceUrl()}`
    );
    return this.categoriesService.getById(id);
  }
}
