import { Injectable } from '@angular/core';
import { MtBaseSearchModel } from 'projects/corelib/src/lib/models/base-search-model';
import { Observable } from 'rxjs/internal/Observable';
import { AppBaseListViewModelService } from '../../core/app-base-list-viewmodel.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductsListDto } from '../../models/products-list-Dto';
import { ProductsService } from './products.service';

@Injectable()
export class ProductsViewModelService
  extends AppBaseListViewModelService<ProductsListDto> {

  constructor(
    public override snackBar: MatSnackBar,
    private productsService: ProductsService
    ) {
    super(snackBar);
    console.log('[OnInit ProductsViewModelService]');
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

  search(searchModel: MtBaseSearchModel): Observable<ProductsListDto[]> {
    console.log(
      `Products viewmodel search called...fetching ${this.productsService.getApiServiceUrl()}`
    );
    return this.productsService.getAll();
  }

  getById(id: string): Observable<ProductsListDto> {
    console.log(
      `Products viewmodel getById called...fetching ${this.productsService.getApiServiceUrl()}`
    );
    return this.productsService.getById(id);
  }
}
