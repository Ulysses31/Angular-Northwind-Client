import { Directive } from '@angular/core';
import { MtPagedListViewModelService } from 'projects/corelib/src/lib/viewmodel/paged-list-viewmodel.service';
import { MtBaseEntity } from 'projects/corelib/src/public-api';
import { MatSnackBar } from '@angular/material/snack-bar';

@Directive()
export abstract class AppBaseListViewModelService<
  TModel extends MtBaseEntity
> extends MtPagedListViewModelService<TModel> {

  constructor(public override snackBar: MatSnackBar) {
    super(snackBar);
    console.log('[OnInit AppBaseListViewModelService]');
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
}
