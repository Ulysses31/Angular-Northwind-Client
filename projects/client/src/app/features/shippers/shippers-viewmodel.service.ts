import { ShippersService } from './shippers.service';
import { Injectable } from '@angular/core';
import { MtBaseSearchModel } from 'projects/corelib/src/lib/models/base-search-model';
import { Observable } from 'rxjs/internal/Observable';
import { AppBaseListViewModelService } from '../../core/app-base-list-viewmodel.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ShippersListDto } from '../../models/shippers-list-Dto';

@Injectable()
export class ShippersViewModelService
  extends AppBaseListViewModelService<ShippersListDto> {

  constructor(
    public override snackBar: MatSnackBar,
    private shippersService: ShippersService
    ) {
    super(snackBar);
    console.log('[OnInit ShippersViewModelService]');
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

  search(searchModel: MtBaseSearchModel): Observable<ShippersListDto[]> {
    console.log(
      `Shippers viewmodel search called...fetching ${this.shippersService.getApiServiceUrl()}`
    );
    return this.shippersService.getAll();
  }

  getById(id: string): Observable<ShippersListDto> {
    console.log(
      `Shippers viewmodel getById called...fetching ${this.shippersService.getApiServiceUrl()}`
    );
    return this.shippersService.getById(id);
  }
}
