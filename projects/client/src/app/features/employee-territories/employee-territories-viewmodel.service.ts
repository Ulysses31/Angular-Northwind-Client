import { ChangeDetectorRef, Injectable } from '@angular/core';
import { MtBaseSearchModel } from 'projects/corelib/src/lib/models/base-search-model';
import { Observable } from 'rxjs/internal/Observable';
import { AppBaseListViewModelService } from '../../core/app-base-list-viewmodel.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeTerritoriesListDto } from '../../models/employee-territories-list-Dto';
import { EmployeeTerritoriesService } from './employee-territories.service';

@Injectable()
export class EmployeeTerritoriesViewModelService
  extends AppBaseListViewModelService<EmployeeTerritoriesListDto> {

  constructor(
    public override snackBar: MatSnackBar,
    private employeeTerritoriesService: EmployeeTerritoriesService
    ) {
    super(snackBar);
    console.log('[OnInit EmployeeTerritoriesViewModelService]');
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

  search(searchModel: MtBaseSearchModel): Observable<EmployeeTerritoriesListDto[]> {
    console.log(
      `EmployeeTerritories viewmodel search called...fetching ${this.employeeTerritoriesService.getApiServiceUrl()}`
    );
    return this.employeeTerritoriesService.getAll();
  }

  getById(id: string): Observable<EmployeeTerritoriesListDto> {
    console.log(
      `EmployeeTerritories viewmodel getById called...fetching ${this.employeeTerritoriesService.getApiServiceUrl()}`
    );
    return this.employeeTerritoriesService.getById(id);
  }
}
