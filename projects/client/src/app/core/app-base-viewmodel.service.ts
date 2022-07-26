import { Directive, Injector } from '@angular/core';
import { MtSingleViewModelService } from 'projects/corelib/src/lib/viewmodel/single-viewmodel.service';
import { MtBaseEntity } from 'projects/corelib/src/public-api';

@Directive()
export abstract class AppBaseViewModelService<
	TModel extends MtBaseEntity
> extends MtSingleViewModelService<TModel> {
	constructor(public override injector: Injector) {
		super(injector);
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
