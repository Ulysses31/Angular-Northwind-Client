import { Component } from '@angular/core';
import { AppBaseListComponent } from '../../core/app-base-list.component';
import { OrdersViewModelService } from './orders-viewmodel.service';

@Component({
	selector: 'app-Orders',
	templateUrl: './Orders.component.html',
	styleUrls: ['./Orders.component.css']
})
export class OrdersComponent extends AppBaseListComponent {
  gridTitle: string = 'Orders';

	constructor(public VM: OrdersViewModelService) {
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
}

