import { Component } from '@angular/core';
import { AppBaseListComponent } from '../../core/app-base-list.component';
import { OrderDetailsViewModelService } from './order-details-viewmodel.service';

@Component({
	selector: 'app-OrderDetails',
	templateUrl: './order-details.component.html',
	styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent extends AppBaseListComponent {
  gridTitle: string = 'Order Details';

	constructor(public VM: OrderDetailsViewModelService) {
		super();
    console.log('[OnInit OrderDetailsComponent]');
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

