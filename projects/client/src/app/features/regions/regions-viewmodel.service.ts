import { RegionsService } from './regions.service';
import { Injectable } from '@angular/core';
import { MtBaseSearchModel } from 'projects/corelib/src/lib/models/base-search-model';
import { Observable } from 'rxjs/internal/Observable';
import { AppBaseListViewModelService } from '../../core/app-base-list-viewmodel.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegionsListDto } from '../../models/regions-list-Dto';

@Injectable()
export class RegionsViewModelService
  extends AppBaseListViewModelService<RegionsListDto> {

  constructor(
    public override snackBar: MatSnackBar,
    private regionsService: RegionsService
    ) {
    super(snackBar);
    console.log('[OnInit RegionsViewModelService]');
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

  search(searchModel: MtBaseSearchModel): Observable<RegionsListDto[]> {
    console.log(
      `Regions viewmodel search called...fetching ${this.regionsService.getApiServiceUrl()}`
    );
    return this.regionsService.getAll();
  }

  getById(id: string): Observable<RegionsListDto> {
    console.log(
      `Regions viewmodel getById called...fetching ${this.regionsService.getApiServiceUrl()}`
    );
    return this.regionsService.getById(id);
  }
}
