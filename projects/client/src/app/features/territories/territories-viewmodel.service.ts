import { Injectable } from '@angular/core';
import { MtBaseSearchModel } from 'projects/corelib/src/lib/models/base-search-model';
import { Observable } from 'rxjs/internal/Observable';
import { AppBaseListViewModelService } from '../../core/app-base-list-viewmodel.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TerritoriesListDto } from '../../models/territories-list-Dto';
import { TerritoriesService } from './Territories.service';

@Injectable()
export class TerritoriesViewModelService
  extends AppBaseListViewModelService<TerritoriesListDto> {

  constructor(
    public override snackBar: MatSnackBar,
    private territoriesService: TerritoriesService
    ) {
    super(snackBar);
    console.log('[OnInit TerritoriesViewModelService]');
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

  search(searchModel: MtBaseSearchModel): Observable<TerritoriesListDto[]> {
    console.log(
      `Territories viewmodel search called...fetching ${this.territoriesService.getApiServiceUrl()}`
    );
    return this.territoriesService.getAll();
  }

  getById(id: string): Observable<TerritoriesListDto> {
    console.log(
      `Territories viewmodel getById called...fetching ${this.territoriesService.getApiServiceUrl()}`
    );
    return this.territoriesService.getById(id);
  }
}
