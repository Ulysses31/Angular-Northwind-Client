import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImtActionToolbarItems } from 'corelib';
import { AppBaseListComponent } from '../../core/app-base-list.component';
import { OrdersViewModelService } from './orders-viewmodel.service';

@Component({
	selector: 'app-orders',
	templateUrl: './orders.component.html',
	styleUrls: ['./orders.component.css']
})
export class OrdersComponent extends AppBaseListComponent {
	gridTitle: string = 'Orders';
	actionBarItems: ImtActionToolbarItems[] = [
		{
			id: 'fullOrder',
			icon: 'description',
			toolTipMessage: 'Edit full order',
			color: '',
			disabled: false,
			command: () => this.editOrderFullItem()
		}
	];

	constructor(
		public VM: OrdersViewModelService,
		private router: Router,
		private route: ActivatedRoute
	) {
		super();
		console.log('[OnInit OrdersComponent]');
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

  private editOrderFullItem(): void {
		const url = this.getCurrentRouteUrl() + '/orders-complete';
		if (this.baseList.selection.selected.length > 0) {
			this.baseList.selection.selected.map((item: any) => {
				if (item) {
					console.log(`Edit item: [${JSON.stringify(item)}]`);
					// console.log(this.selection.selected);
					let idName: string = this.VM?.extractFieldNameId([
						item
					]) as string;
					let id: string = item[idName];
					this.router.navigate([url, id], {
						queryParams: { backUrl: this.router.url }
					});
				}
			});
		} else {
			this.VM?.openSnackBar(this.VM?.snackEditMsg!, 'Close');
		}
	}

  private getCurrentRouteUrl(): string {
		const url: any = this.route.root.snapshot;
		return url._routerState.url;
	}
}
