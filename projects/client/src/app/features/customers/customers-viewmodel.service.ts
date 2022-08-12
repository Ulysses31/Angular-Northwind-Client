import { Injectable } from '@angular/core';
import { MtBaseSearchModel } from 'projects/corelib/src/lib/models/base-search-model';
import { Observable } from 'rxjs/internal/Observable';
import { AppBaseListViewModelService } from '../../core/app-base-list-viewmodel.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomersListDto } from '../../models/customers-list-Dto';
import { CustomersService } from './customers.service';

@Injectable()
export class CustomersViewModelService
  extends AppBaseListViewModelService<CustomersListDto> {

  constructor(
    public override snackBar: MatSnackBar,
    private customersService: CustomersService
    ) {
    super(snackBar);
    console.log('[OnInit CustomersViewModelService]');
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

  search(searchModel: MtBaseSearchModel): Observable<CustomersListDto[]> {
    console.log(
      `Customers viewmodel search called...fetching ${this.customersService.getApiServiceUrl()}`
    );
    return this.customersService.getAll();
  }

  getById(id: string): Observable<CustomersListDto> {
    console.log(
      `Customers viewmodel getById called...fetching ${this.customersService.getApiServiceUrl()}`
    );
    return this.customersService.getById(id);
  }
}
