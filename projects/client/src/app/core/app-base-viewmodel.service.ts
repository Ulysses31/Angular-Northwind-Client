import { Directive, Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MtSingleViewModelService } from 'projects/corelib/src/lib/viewmodel/single-viewmodel.service';
import { MtBaseEntity } from 'projects/corelib/src/public-api';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';

@Directive()
export abstract class AppBaseViewModelService<
	TModel extends MtBaseEntity
> extends MtSingleViewModelService<TModel> {
	constructor(
		public override injector: Injector,
    public override dialog: MatDialog,
    public override snackBar: MatSnackBar,
    public override route: ActivatedRoute,
    public override router: Router
	) {
		super(injector, dialog, snackBar, route, router);
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
