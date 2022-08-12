import { Injectable } from '@angular/core';
import { MtBaseSearchModel } from 'projects/corelib/src/lib/models/base-search-model';
import { Observable } from 'rxjs/internal/Observable';
import { AppBaseListViewModelService } from '../../core/app-base-list-viewmodel.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeesListDto } from '../../models/employees-list-Dto';
import { EmployeesService } from './employees.service';

@Injectable()
export class EmployeesViewModelService
  extends AppBaseListViewModelService<EmployeesListDto> {

  constructor(
    public override snackBar: MatSnackBar,
    private employeesService: EmployeesService
    ) {
    super(snackBar);
    console.log('[OnInit EmployeesViewModelService]');
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

  search(searchModel: MtBaseSearchModel): Observable<EmployeesListDto[]> {
    console.log(
      `Employees viewmodel search called...fetching ${this.employeesService.getApiServiceUrl()}`
    );
    return this.employeesService.getAll();
  }

  getById(id: string): Observable<EmployeesListDto> {
    console.log(
      `Employees viewmodel getById called...fetching ${this.employeesService.getApiServiceUrl()}`
    );
    return this.employeesService.getById(id);
  }
}
